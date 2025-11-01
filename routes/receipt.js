// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] Receipt (PRODUCTLIST PAGE)
// RETURN (name, price, QUA: Quantity Unit x Amount, category)
// WHERE SN.shoppingnodeID = RE.shoppingnodeID
// --------------------------------------------

router.get('/:id', async(req, res) => { 
  let snID = req.params.id;
  let userID = req.body.uID;

    let receiptitems = await prisma.$queryRaw`SELECT RE.receiptID, PR.productname, RE.price, CONCAT(RE.quantifier, ' x ', RE.quantity, UN.unitname) as QUA, CA.categoryname FROM receipt as RE
    INNER JOIN product as PR on RE.productID = PR.productID
    INNER JOIN category as CA on PR.categoryID = CA.categoryID
    INNER JOIN unit as UN on RE.unitID = UN.unitID 
    INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
    WHERE SN.usersID = 3 
    AND RE.shoppingnodeID = ${snID};`;

  res.json(receiptitems);
})

router.put('/:id', async(req, res) => {
  let reqNodeID = req.params.id;

  let reqName = req.body.reqName;
  let reqPrice = req.body.reqPrice;
  let reqQuantity = req.body.reqQuantifier;
  let reqUnit = req.body.reqUnit;
  let reqQuantifier = req.body.reqQuantifier;
  let reqCategory = req.body.reqCategory;

  if(reqName !== undefined && reqCategory !== undefined && reqPrice !== undefined && reqQuantity !== undefined && reqUnit !== undefined && reqQuantifier !== undefined){
    let ct = checktypes(reqName, reqPrice, reqQuantity, reqQuantifier);
    if(!ct){
      res.json({"error": "wrong datatypes"});
    }
    else{
      let prcheck = await productcheck(reqName, reqCategory);

      let unitsearch = await prisma.unit.findMany({
        where:{
          unitname: reqUnit
        }
      })
      let unID = unitsearch[0].unitID;

      let insertProduct = await prisma.receipt.create({
        data:{
          productID: prcheck,
          unitID: unID,
          price: reqPrice,
          quantity: reqQuantity,
          quantifier: reqQuantifier,
          shoppingnodeID: parseInt(reqNodeID)
        }
      })
      res.json(insertProduct);
    }
    
    /*if(!ct){
      res.json({"error": "incorrect datatypes"});
    }
    else{
      
    }*/
  }
  else{
    res.json({
      "error": "insufficient data given to insert new product into list"
    });
  }

})

async function productcheck(proName, catName) {
  let productExists = await prisma.$queryRaw`SELECT productID FROM product
    WHERE productname LIKE ${'%' + proName + '%'}`;

  if(productExists === undefined){
    let categoryIDResult = await prisma.$queryRaw`SELECT categoryID FROM category
    WHERE categoryname LIKE ${catName};`

    let categoryID = categoryIDResult[0].categoryID;

    let newProduct = await prisma.product.create({
      data: {
        productname: proName,
        categoryID: categoryID
      }
    });

    return newProduct[0].productID;
  }
  else if(productExists.length > 0){
    let categoryIDResult = await prisma.$queryRaw`SELECT categoryID FROM category
    WHERE categoryname LIKE ${catName};`

    let categoryID = categoryIDResult[0].categoryID;

    await prisma.product.update({
      where:{
        productID: productExists[0].productID
      },
      data:{
        categoryID: parseInt(categoryID)
      }
    });

    return productExists[0].productID;
  }
}

function checktypes(na, pr, qy, qf){
  if(typeof na != "string"){
    return false;
  }
  if(typeof pr != 'number'){
    return false;
  }
  if(typeof qy != 'number'){
    return false;
  }
  if(typeof qf != 'number'){
    return false;
  }
  return true;
}

/*router.put('/:id', ', async(req, res) => {
  // Define which receiptitem to append
  let recID = req.params.recID;
  
  // Define new data for specified receiptitem
  let recName = req.body.recName;
  let recPrice = req.body.recPrice;
  let recQuantifier = req.body.recQuantifier;
  let recCategory = req.body.recCategory;

  let response = {};

  if(recName !== undefined){
    let productExists = await prisma.$queryRaw`SELECT productID FROM product
    WHERE productname LIKE(%${recName}%)`;

    if(productExists.length === 0 && recCategory !== undefined){
      let categoryID = await prisma.$queryRaw`SELECT categoryID FROM category
      WHERE categoryname LIKE (${recCategory});`

      let newProduct = await prisma.product.create({
        data: {
          productname: recName,
          categoryID: categoryID
        }
      });

      let insertedID = newProduct.productID;

      let insertRec = await prisma.$queryRaw`UPDATE receipt 
      SET productID = ${insertedID}
      WHERE receiptID = ${recID};`
    }
    else{
      response.error = "Specify category for new product";
    }

  }
  if(recPrice !== undefined){
    let updatePrice = await prisma.$queryRaw`UPDATE receipt 
    SET price = ${recPrice}
    WHERE receiptID = ${recID};`
  }
  if(recQuantifier !== undefined){
    let updateQuantifier = await prisma.$queryRaw`UPDATE receipt 
    SET quantifier = ${recQuantifier}
    WHERE receiptID = ${recID};`
  }
  if(recCategory !== undefined){

  }
})*/

module.exports = router;
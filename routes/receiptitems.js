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

    // Receiptitems => In the page productlist; you must be able to see your full receipt (with ID = ... depending on which shoppingnode you clicked in the list. In ShoppingHistory)
    // The order goes: ID (not shown, but needed if users want to edit / delete it), productname, price, QF x QT Unit (example: 5 x 1l), Categoryname
    let receiptitems = await prisma.$queryRaw`SELECT RI.receiptitemsID, PR.productname, RI.price, CONCAT(RI.amount, ' x ', RI.quantity, UN.unitname) as QUA, CA.categoryname FROM receiptitems as RI
    INNER JOIN product as PR on RI.productID = PR.productID
    INNER JOIN category as CA on PR.categoryID = CA.categoryID
    INNER JOIN unit as UN on RI.unitID = UN.unitID 
    INNER JOIN receipt as RE on RE.receiptID = RI.receiptID
    WHERE RE.receiptID = ${snID};`;

  res.json(receiptitems);
})

router.delete('/:id', async(req, res) =>{
  let delID = req.params.id;

  let deleteditem = await prisma.receiptitems.delete({
    where:{
      receiptitemsID: parseInt(delID)
    }
  });

  res.json(deleteditem);
})

//-----------------------------------------------
// [POST] receipt(item)
// Add new receiptitem to receipt (if you forgot)
//-----------------------------------------------

router.post('/:id', async(req, res) => {
  let ReceiptID = req.params.id;

  let ProductName = req.body.ProductName;
  let RIprice = req.body.RIprice;
  let RIquantity = req.body.RIquantity;
  let RIunit = req.body.RIunit; // Always correct. Dropdown menu
  let RIamount = req.body.RIamount;
  let ProductCategory = req.body.ProductCategory; // Always correct. Dropdown menu
  
  // Nothing may be empty, all data must be present in order to insert new receiptitem.

  if(ProductName !== undefined && RIprice !== undefined && RIquantity !== undefined && RIunit !== undefined && RIamount !== undefined && ProductCategory !== undefined){
    let ct = checktypes(ProductName, RIprice, RIquantity, RIamount); // Correct datatypes?
    if(!ct){
      res.json({"error": "wrong datatypes"});
    }
    else{
      let prcheck = await productcheck(ProductName, ProductCategory); // => If product exists: get it.
                                                              // => If product does not exist: insert new product with specified categoryID.

      console.log("prcheck: " + prcheck);
      let unitsearch = await prisma.unit.findMany({
        where:{
          unitname: RIunit
        }
      })
      let unID = unitsearch[0].unitID; // Get unittype from table units. (In g? kg? l? ml? ...)

      let insertProduct = await prisma.receiptitems.create({ // Insert product with provided data.
        data:{
          productID: parseInt(prcheck),
          unitID: parseInt(unID),
          price: RIprice,
          quantity: RIquantity,
          amount: RIamount,
          receiptID: parseInt(ReceiptID)
        }
      })
      res.json(insertProduct);
    }
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

  if(productExists.length === 0){
    let categoryIDResult = await prisma.$queryRaw`SELECT categoryID FROM category
    WHERE categoryname LIKE ${catName};`

    let categoryID = categoryIDResult[0].categoryID;

    let newProduct = await prisma.product.create({
      data: {
        productname: proName,
        categoryID: categoryID
      }
    });
    return newProduct.productID;
  }
  else if(productExists.length > 0){
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

module.exports = router;
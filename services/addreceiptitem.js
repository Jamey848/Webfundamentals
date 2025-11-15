const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

async function addReceiptItem(itemData, res) {
  let ReceiptID = itemData.RE_ID;
  let ProductName = itemData.PN;
  let RIprice = itemData.RI_P;
  let RIquantity = itemData.RI_Q;
  let RIunit = itemData.RI_U; // Always correct. Dropdown menu
  let RIamount = itemData.RI_A;
  let ProductCategory = itemData.PC; // Always correct. Dropdown menu
  
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

      itemdata = {
        productID: parseInt(prcheck),
        unitID: parseInt(unID),
        price: RIprice,
        quantity: RIquantity,
        amount: RIamount,
        receiptID: parseInt(ReceiptID)
      }

      let insertItem = await prisma.receiptitems.create({
        data: itemdata
      });
      
      res.json(insertItem);
    }
  }
  else{
    res.json({
      "error": "insufficient data given to insert new product into list"
    });
  }
}

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

module.exports = { addReceiptItem };
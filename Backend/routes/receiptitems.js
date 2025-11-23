// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

const { addReceiptItem } = require("../services/addreceiptitem");

// --------------------------------------------
// [GET] Receipt (PRODUCTLIST PAGE)
// RETURN (name, price, QUA: Quantity Unit x Amount, category)
// WHERE SN.shoppingnodeID = RE.shoppingnodeID
// --------------------------------------------

router.get('/permanentValues', async (req, res) => {
  const allcategories = await prisma.category.findMany();
  const allunits = await prisma.unit.findMany();
  const allstores = await prisma.store.findMany();

  res.json({
    allcategories: allcategories,
    allunits: allunits,
    allstores: allstores
  })
});


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

  let itemData = {
    RE_ID: ReceiptID,
    PN: ProductName,
    RI_P: RIprice,
    RI_Q: RIquantity,
    RI_U: RIunit,
    RI_A: RIamount,
    PC: ProductCategory
  }

  addReceiptItem(itemData, res);
})

module.exports = router;
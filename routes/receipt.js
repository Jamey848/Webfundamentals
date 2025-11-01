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

    let receiptitems = await prisma.$queryRaw`SELECT PR.productname, RE.price, CONCAT(RE.quantifier, ' x ', RE.quantity, UN.unitname) as QUA, CA.categoryname FROM receipt as RE
    INNER JOIN product as PR on RE.productID = PR.productID
    INNER JOIN category as CA on PR.categoryID = CA.categoryID
    INNER JOIN unit as UN on RE.unitID = UN.unitID 
    INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
    WHERE SN.usersID = 3 
    AND RE.shoppingnodeID = ${snID};`;

  res.json(receiptitems);
})

module.exports = router;
// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

//--------------------------------
//[GET] metricsdata (METRICS & ANALYSIS PAGE)
//RETURN Generalmetrics, CategoryRatios and Data Visualization
//--------------------------------

router.get('/', async(req, res) => {
  let Generalmetrics = await prisma.$queryRaw`SELECT SUM(price) as TotalSum, ROUND(AVG(price), 2) as AverageSum
  FROM receipt as RE
  INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
  WHERE SN.usersID = 3;`;

  let Topthree = await prisma.$queryRaw`SELECT CA.categoryname, CAST(COUNT(CA.categoryname) AS CHAR) as categorycount, CAST(SUM(RE.price) AS CHAR) as totalprice FROM category as CA
  INNER JOIN product AS PR ON CA.categoryID = PR.categoryID
  INNER JOIN receipt AS RE ON PR.productID = RE.productID
  INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
  WHERE SN.usersID = 3 GROUP BY CA.categoryname ORDER BY COUNT(CA.categoryname) desc;`;

  let categorytotal = parseFloat(Generalmetrics[0].TotalSum);

  let categoryratios = Topthree.map(c => ({
  categoryname: c.categoryname,
  percentage: ((parseFloat(c.totalprice) / categorytotal) * 100).toFixed(2) + "%"}));
  
  res.json({
    generalmetrics: Generalmetrics,
    topthree: Topthree.slice(0,3),
    total: categorytotal,
    ratios: categoryratios
  });
})

router.get('/', async(req, res) => {

})

module.exports = router;
// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

const { startOfWeek, startOfMonth, startOfYear, format } = require('date-fns');

//--------------------------------
//[GET] metricsdata (METRICS & ANALYSIS PAGE)
//RETURN Generalmetrics, CategoryRatios and Data Visualization
//--------------------------------

router.get('/', async(req, res) => {
  let userID = req.body.uID;

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

router.get('/graph', async(req, res) => {
  let catname = req.body.cat;
  let timefilter = req.body.filter;
  let userID = req.body.uID;

  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");

  let graphdata = await prisma.$queryRaw`SELECT CA.categoryname, SUM(RE.quantifier) as Amountbought, SUM(RE.price) as Totalprice, SN.shoppingdate FROM category as CA
  INNER JOIN product as PR on CA.categoryID = PR.categoryID
  INNER JOIN receipt as RE on RE.productID = PR.productID
  INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
  WHERE SN.usersID = 3 
  AND CA.categoryname = ${catname}
  AND SN.shoppingdate BETWEEN ${startdate} AND ${enddate}
  GROUP BY CA.categoryname, SN.shoppingdate
  ORDER BY SN.shoppingdate asc;`;

  res.json(graphdata);
})

function findstartdate(dmy){
  const today = new Date();
  if(dmy == "week"){
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    return weekStart
  }
  else if(dmy == "month"){
    const monthStart = startOfMonth(today);
    return monthStart;
  }
  else if(dmy == "year"){
    const yearStart = startOfYear(today);
    return yearStart;
  }
}

module.exports = router;
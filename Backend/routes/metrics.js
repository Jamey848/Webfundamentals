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

router.post('/', async(req, res) => {
  let userID = req.body.userID;

  let Generalmetrics = await prisma.$queryRaw`SELECT SUM(price) as TotalSum, ROUND(AVG(price), 2) as AverageSum
  FROM receiptitems as RI
  INNER JOIN receipt as RE on RE.receiptID = RI.receiptID
  WHERE RE.usersID = ${userID}
  AND RE.futurepurchase = 0;`;

  let Topthree = await prisma.$queryRaw`SELECT CA.categoryname, CAST(COUNT(CA.categoryname) AS CHAR) as categorycount, CAST(SUM(RI.price) AS CHAR) as totalprice FROM category as CA
  INNER JOIN product AS PR ON CA.categoryID = PR.categoryID
  INNER JOIN receiptitems AS RI ON PR.productID = RI.productID
  INNER JOIN receipt as RE on RI.receiptID = RE.receiptID
  WHERE RE.usersID = ${userID} 
  AND RE.futurepurchase = 0
  GROUP BY CA.categoryname 
  ORDER BY COUNT(CA.categoryname) desc;`;

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

router.post('/graph', async(req, res) => {
  let CategoryName = req.body.CategoryName;
  let TimeFilter = req.body.TimeFilter;
  let userID = req.body.userID;

  if(TimeFilter == "" || CategoryName == ""){
    res.json({
      "error": "Missing parameters!"
    })
  }
  else{
    let startdate = format(findstartdate(TimeFilter), "yyyy-MM-dd");
    let enddate = format(new Date(), "yyyy-MM-dd");

    let graphdata = await prisma.$queryRaw`SELECT CA.categoryname, SUM(RI.amount) as Amountbought, SUM(RI.price) as Totalprice, RE.receiptdate FROM category as CA
    INNER JOIN product as PR on CA.categoryID = PR.categoryID
    INNER JOIN receiptitems as RI on RI.productID = PR.productID
    INNER JOIN receipt as RE on RI.receiptID = RE.receiptID
    WHERE RE.usersID = ${userID} 
    AND CA.categoryname = ${CategoryName}
    AND RE.receiptdate BETWEEN ${startdate} AND ${enddate}
    GROUP BY CA.categoryname, RE.receiptdate
    ORDER BY RE.receiptdate asc;`;

    res.json(graphdata);
  }
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
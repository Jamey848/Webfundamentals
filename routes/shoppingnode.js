// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

const { startOfWeek, startOfMonth, startOfYear, format } = require('date-fns');

//import { DateRange } from "easy-date-range";

// --------------------------------------------
// [GET] shoppingnode (SHOPPINGHISTORY PAGE)
// return all data of shoppingnode + Total amount spend + Amount of shopping trips + most visited store
// WHERE datefilter (this week, this month, this year)
// --------------------------------------------

router.get('/', async(req, res) => {

  // Shoppingnode data filtered by date (HOLY CRAP I HATE DATE AND TIME IN JAVASCRIPT)
  let timefilter = req.body.filter;
  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");
  
  let shoppingnodes = await prisma.$queryRaw`SELECT * FROM shoppingnode WHERE shoppingdate BETWEEN ${startdate} AND ${enddate}
  AND shoppingnode.futurepurchase = 0`;

  // Find total amount spend (from receipts linked to shoppingnode)
  let totalspend = await prisma.$queryRaw`SELECT SUM(price) FROM receipt as RE
  INNER JOIN shoppingnode as SN on RE.receiptID = SN.receiptID
  WHERE SN.shoppingdate BETWEEN ${startdate} AND ${enddate} AND SN.usersID = 3 
  AND SN.futurepurchase = false`;

  // Count # shopping trips
  let countshoppingtrips = await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) FROM shoppingnode 
  WHERE shoppingdate BETWEEN ${startdate} AND ${enddate}
  AND shoppingnode.futurepurchase = false`;
  
  // res.json({total: Number(countshoppingtrips[0]["COUNT(*)"])}); Yeah because it's a bigint for some reason
  // Most visted store
  let mostvisitedstore = await prisma.$queryRaw`SELECT RE.storeID, ST.storename, CAST(Count(RE.storeID) AS CHAR) as VisitCount FROM receipt as RE
  INNER JOIN shoppingnode as SN on RE.receiptID = SN.receiptID
  INNER JOIN store as ST on RE.storeID = ST.storeID
  WHERE SN.shoppingdate BETWEEN ${startdate} AND ${enddate} 
  AND SN.usersID = 3 AND SN.futurepurchase = false GROUP BY storeID ORDER BY VisitCount desc LIMIT 1;`;

  res.json({
    nodes: shoppingnodes,
    total: totalspend,
    count: countshoppingtrips,
    store: mostvisitedstore
  });
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
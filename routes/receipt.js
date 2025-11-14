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

// IMPORTANT TO-DO: REPLACE usersID WITH ACTUAL ID OF LOGGED IN USER

router.get('/', async(req, res) => {

  // Shoppingnode data filtered by date (HOLY CRAP I HATE DATE AND TIME IN JAVASCRIPT)
  let timefilter = req.body.timefilter;
  let userID = req.body.userID;
  let futurepurchase = req.body.futurepurchase;

  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");
  
  let receipts = await prisma.$queryRaw`SELECT * FROM receipt 
  WHERE receipt.usersID = ${userID}
  AND receiptdate BETWEEN ${startdate} AND ${enddate}
  AND receipt.futurepurchase = ${futurepurchase}`;

  // Find total amount spend (from receipts linked to shoppingnode)
  let totalspend = await prisma.$queryRaw`SELECT SUM(price) AS totalprice FROM receiptitems as RI
  INNER JOIN receipt as RE on RI.receiptID = RI.receiptID
  WHERE RE.usersID = ${userID}
  AND receiptdate BETWEEN ${startdate} AND ${enddate} 
  AND RE.futurepurchase = ${futurepurchase};`;

  // Count # shopping trips
  let countshoppingtrips = await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS shoppingcount FROM receipt 
  WHERE receipt.usersID = ${userID}
  AND receiptdate BETWEEN ${startdate} AND ${enddate}
  AND receipt.futurepurchase = ${futurepurchase}`;

  // res.json({total: Number(countshoppingtrips[0]["COUNT(*)"])}); Yeah because it's a bigint for some reason
  // Most visted store
  
  let mostvisitedstore = await prisma.$queryRaw`SELECT ST.storename, CAST(COUNT(ST.storeID) AS CHAR) AS storecount FROM store as ST
  INNER JOIN receipt as RE ON ST.storeID = RE.storeID
  WHERE RE.usersID = ${userID} 
  AND RE.futurepurchase = ${futurepurchase} 
  AND RE.receiptdate BETWEEN ${startdate} AND ${enddate}
  GROUP BY ST.storeID ORDER BY COUNT(ST.storeID) desc LIMIT 1;`;

  res.json({
    nodes: receipts,
    total: totalspend,
    count: countshoppingtrips,
    store: mostvisitedstore
  });
})

//----------------------------------
// [Post] Shoppingnode
// Users can insert a new shoppingnode.
//----------------------------------

router.post('/', async(req, res) => {
  // First! We must initialize the receipt itself
  let nodename = req.body.nodename;
  let store = req.body.store;
  let date = req.body.date;

  //if(nodename )
})

router.delete('/:id', async(req, res) => {
  let deleteID = req.params.id;

  let deletedNode = await prisma.shoppingnode.delete({
    where:{
      shoppingnodeID: parseInt(deleteID)
    }
  });

  res.json(deletedNode);
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
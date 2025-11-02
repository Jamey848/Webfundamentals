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
  let timefilter = req.body.filter;
  let userID = req.body.uID;

  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");
  
  let shoppingnodes = await prisma.$queryRaw`SELECT * FROM shoppingnode 
  WHERE shoppingnode.usersID = ${userID}
  AND shoppingdate BETWEEN ${startdate} AND ${enddate}
  AND shoppingnode.futurepurchase = 0`;

  // Find total amount spend (from receipts linked to shoppingnode)
  let totalspend = await prisma.$queryRaw`SELECT SUM(price) AS totalprice FROM receipt as RE
  INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
  WHERE SN.usersID = ${userID}
  AND shoppingdate BETWEEN ${startdate} AND ${enddate} 
  AND SN.futurepurchase = 0;`;

  // Count # shopping trips
  let countshoppingtrips = await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS shoppingcount FROM shoppingnode 
  WHERE shoppingnode.usersID = ${userID}
  AND shoppingdate BETWEEN ${startdate} AND ${enddate}
  AND shoppingnode.futurepurchase = 0`;
  
  // res.json({total: Number(countshoppingtrips[0]["COUNT(*)"])}); Yeah because it's a bigint for some reason
  // Most visted store
  let mostvisitedstore = await prisma.$queryRaw`SELECT ST.storename, CAST(COUNT(ST.storeID) AS CHAR) AS storecount FROM store as ST
  INNER JOIN shoppingnode as SN ON ST.storeID = SN.storeID
  WHERE SN.usersID = ${userID} 
  AND SN.shoppingdate BETWEEN ${startdate} AND ${enddate}
  GROUP BY ST.storeID ORDER BY COUNT(ST.storeID) desc LIMIT 1;`;

  res.json({
    nodes: shoppingnodes,
    total: totalspend,
    count: countshoppingtrips,
    store: mostvisitedstore
  });
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
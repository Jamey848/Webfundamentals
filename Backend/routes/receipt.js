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

router.post('/data', async(req, res) => {

  // Shoppingnode data filtered by date (HOLY CRAP I HATE DATE AND TIME IN JAVASCRIPT)
  let timefilter = req.body.timefilter;
  let userID = req.body.userID;
  let futurepurchase = req.body.futurepurchase;

  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");
  
  let receipts;
  if(futurepurchase === 1){
    receipts = await prisma.$queryRaw`
    SELECT * FROM receipt 
    WHERE receipt.usersID = ${userID} 
    AND receipt.futurepurchase = 1`
  }
  else{
    receipts = await prisma.$queryRaw`
    SELECT * FROM receipt 
    WHERE receipt.usersID = ${userID} 
    AND receiptdate BETWEEN ${startdate} AND ${enddate}`
  }

  // Find total amount spend (from receipts linked to shoppingnode)
  let totalspend;
  if(futurepurchase === 1){
    totalspend = await prisma.$queryRaw`
    SELECT SUM(RI.price) AS totalprice 
    FROM receiptitems AS RI
    INNER JOIN receipt AS RE ON RI.receiptID = RE.receiptID
    WHERE RE.usersID = ${userID}
    AND RE.futurepurchase = 1`;
  } 
  else{
    totalspend = await prisma.$queryRaw`
    SELECT SUM(RI.price) AS totalprice 
    FROM receiptitems AS RI
    INNER JOIN receipt AS RE ON RI.receiptID = RE.receiptID
    WHERE RE.usersID = ${userID}
    AND RE.receiptdate BETWEEN ${startdate} AND ${enddate}`;
  }

  // Count # shopping trips
  let countshoppingtrips;
  if(futurepurchase === 1){
    countshoppingtrips = await prisma.$queryRaw`
    SELECT CAST(COUNT(*) AS CHAR) AS shoppingcount 
    FROM receipt 
    WHERE receipt.usersID = ${userID}
    AND receipt.futurepurchase = 1`;
  }
  else{
    countshoppingtrips = await prisma.$queryRaw`
    SELECT CAST(COUNT(*) AS CHAR) AS shoppingcount 
    FROM receipt 
    WHERE receipt.usersID = ${userID}
    AND receipt.receiptdate BETWEEN ${startdate} AND ${enddate}`;
  }

  // res.json({total: Number(countshoppingtrips[0]["COUNT(*)"])}); Yeah because it's a bigint for some reason
  // Most visted store
  
  let mostvisitedstore;
  if(futurepurchase === 1){
    mostvisitedstore = await prisma.$queryRaw`
    SELECT ST.storename, CAST(COUNT(ST.storeID) AS CHAR) AS storecount 
    FROM store AS ST
    INNER JOIN receipt AS RE ON ST.storeID = RE.storeID
    WHERE RE.usersID = ${userID}
    AND RE.futurepurchase = 1
    GROUP BY ST.storeID
    ORDER BY COUNT(ST.storeID) DESC
    LIMIT 1`;
  }
  else{
    mostvisitedstore = await prisma.$queryRaw`
    SELECT ST.storename, CAST(COUNT(ST.storeID) AS CHAR) AS storecount 
    FROM store AS ST
    INNER JOIN receipt AS RE ON ST.storeID = RE.storeID
    WHERE RE.usersID = ${userID}
    AND RE.receiptdate BETWEEN ${startdate} AND ${enddate}
    GROUP BY ST.storeID
    ORDER BY COUNT(ST.storeID) DESC
    LIMIT 1`;
  }

  res.json({
    nodes: receipts,
    total: totalspend,
    count: countshoppingtrips,
    store: mostvisitedstore,
    isfuture: futurepurchase
  });
})

//----------------------------------
// [Post] Shoppingnode
// Users can insert a new shoppingnode.
//----------------------------------

router.post('/', async(req, res) => {
  // First! We must initialize the receipt itself

  let userID = req.body.userID;
  let storeID = req.body.storeID;
  let receiptname = req.body.receiptname;
  let budgetID = req.body.budgetID;
  let futurepurchase = req.body.futurepurchase;
  let date = req.body.date;

  let result = await prisma.$queryRaw`
  INSERT INTO Receipt (usersID, receiptname, storeID, receiptdate, budgetID, futurepurchase)
  VALUES (${userID}, ${receiptname}, ${storeID}, ${date}, ${budgetID}, ${futurepurchase});`;

  const [insertedReceipt] = await prisma.$queryRaw`
  SELECT * FROM Receipt WHERE receiptID = LAST_INSERT_ID();`;

  res.json(insertedReceipt);
})

router.delete('/:id', async(req, res) => {
  let deleteID = req.params.id;

  let deletedNode = await prisma.receipt.delete({
    where:{
      receiptID: parseInt(deleteID)
    }
  });

  res.json(deletedNode);
})

router.put('/allocatedbudget', async(req, res) => {
  const receiptID = req.body.receiptID;
  const budgetID = req.body.budgetID;

  const updatedReceipt = await prisma.receipt.update({
    where: 
    { 
      receiptID: parseInt(receiptID) 
    },
      data: { budgetID: parseInt(budgetID) }
    });

  res.json(updatedReceipt);
})

// UPDATE RECEIPT => Register it as a past purchase!
router.put('/:id', async(req, res) => {
  let updateReceipt = await prisma.receipt.update({
    where:{
      receiptID: parseInt(req.params.id)
    },
    data:{
      futurepurchase: false
    }
  })

  res.json(updateReceipt)
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
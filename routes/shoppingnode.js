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
// [GET] shoppingnode 
// return all data of shoppingnode + Total amount spend + Amount of shopping trips + most visited store
// WHERE datefilter (this week, this month, this year)
// --------------------------------------------

router.get('/', async(req, res) => {

  // Shoppingnode data filtered by date (HOLY CRAP I HATE DATE AND TIME IN JAVASCRIPT)
  let timefilter = req.body.filter;
  let startdate = format(findstartdate(timefilter), "yyyy-MM-dd");
  let enddate = format(new Date(), "yyyy-MM-dd");
  
  let shoppingnodes = await prisma.$queryRaw`SELECT * FROM shoppingnode WHERE shoppingdate BETWEEN ${startdate} AND ${enddate}`;

  res.json(shoppingnodes);
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

function localDate(year, month, day) {
  // month is 0-indexed
  return new Date(year, month, day, 0, 0, 0, 0);
}

module.exports = router;
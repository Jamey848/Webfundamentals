const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] users (LOGIN PAGE)
// return userID
// where gmail, password
// --------------------------------------------

router.get('/', async(req, res) => { //Async = Wacht op antwoord op database
  const us = await prisma.users.findMany();
  res.json(us);
})

// --------------------------------------------
// [POST] users (REGISTER PAGE)
// return userID
// Gmail notification. Send welcome email
// --------------------------------------------

module.exports = router;
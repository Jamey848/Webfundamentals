const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] users (LOGIN PAGE)
// return userID
// where gmail, password
//
// To-Do: Check hashed password
// (OPTIONAL: CREATE TOKEN. JWT)
// --------------------------------------------

router.get('/', async(req, res) => { //Async = Wacht op antwoord op database
  const usersGmail = req.body.UG;
  const usersPassword = req.body.UP;

  const userexist = await prisma.users.findMany({
    where:{
      gmail: usersGmail
    }
  });

  if(userexist.length === 0){
    res.json({
      "status": "not found in database"
    });
  }
  else if(userexist[0].permission == 3){
    res.json({
      "status": "Invalid permission status"
    });
  }
  else{
    const salt = await bcrypt.genSalt();
    const hashedPassword = userexist[0].userpassword;

    const passwordMatched = await bcrypt.compare(usersPassword, hashedPassword);

    if(passwordMatched){
      res.json(userexist);
    }
    else{
      res.json({
        "status": "Invalid password"
      });
    }
  }
});

// --------------------------------------------
// [POST] users (REGISTER PAGE)
// return userID
// Gmail notification. Send welcome email
// --------------------------------------------

router.post('/', async(req, res) => { 
  const usersName = req.body.UN;
  const usersGmail = req.body.UG;
  const usersPassword = req.body.UP;
});

module.exports = router;
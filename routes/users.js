const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] users (LOGIN PAGE)
// return userID
// where gmail, password
//
// (OPTIONAL: CREATE TOKEN. JWT)
// --------------------------------------------

router.get('/', async(req, res) => { //Async = Wacht op antwoord op database
  const usersGmail = req.body.UG;
  const usersPassword = req.body.UP;

  const userexist = await prisma.users.findMany({
    where:{
      gmail: usersGmail,
      userpassword: usersPassword
    }
  });

  if(userexist.length === 0){
    res.json({
      "status": "not found in database"
    });
  }
  else if(userexist[0].permission == 3){
    res.json({
      "status": "access denied"
    });
  }
  else{
    res.json(userexist);
  }
});

// --------------------------------------------
// [POST] users (REGISTER PAGE)
// return userID
// Gmail notification. Send welcome email
// --------------------------------------------

module.exports = router;
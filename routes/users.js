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
// Gmail notification. Send welcome email (+ validate gmail address I suppose?)
// --------------------------------------------

router.post('/', async(req, res) => { 
  const usersName = req.body.UN;
  const usersGmail = req.body.UG;
  const usersPassword = req.body.UP;

  let pass = passwordCheck(usersPassword);
  if(pass == "correct"){
    const checkGmail = await prisma.users.findMany({
      where:{
        gmail: usersGmail
      }
    });

    if(checkGmail.Length === 0){
      res.json({
        "error": "gmail address is already taken. Please enter valid gmail address"
      });
    }
    else{
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(usersPassword, salt);

      const insertuser = await prisma.users.create({
        data:{
          username: usersName,
          userpassword: hashedPassword,
          gmail: usersGmail,
          budget: null,
          permission: 1
        }
      });
      res.json(insertuser);
    }

  }
  else{
    res.json({
      "error": pass
    })
  }
});

function passwordCheck(password){
  const digitpattern = /[0-9]/g;
  const upperpattern = /[A-Z]/g;
  const specialpattern = /[^\w\s]/g;
  
  //Check length
  if(password.length < 12){
    return "Password must include at least 12 characters"
  }
  else if(password.match(digitpattern).length < 4){
    return "Password must include at least 4 digits"
  }
  else if(password.match(upperpattern).length < 4){
    return "Password must include at least 4 uppercase characters"
  }
  else if(password.match(specialpattern).length < 2){
    return "Password must include at least 2 special characters"
  }

  return "correct"
}

module.exports = router;
const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

const valid = require("validator");
const fs = require('fs');

const webhookurl = "https://hook.eu2.make.com/3t5t789bdva3klse14hnoowdry02q4yz";

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

  const userexist = await prisma.users.findMany({ // The only unique identifier based on userinput is gmail.
    where:{                                       // Can you assume all gmail's to be unique? I guess so...
      gmail: usersGmail
    }
  });

  if(userexist.length === 0){ // Gmail not found = failed login attempt
    res.json({
      "status": "not found in database"
    });
  }
  else if(userexist[0].permission == 3){ // Permission 3 means banned. This power is only trusted to admins.
    res.json({
      "status": "Invalid permission status"
    });
  }
  else{
    const salt = await bcrypt.genSalt();
    const hashedPassword = userexist[0].userpassword;

    const passwordMatched = await bcrypt.compare(usersPassword, hashedPassword); // Check integrity of stored and generated hash.

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
  const usersPassword = req.body.UP; // Get all data from textboxes

  let pass = passwordCheck(usersPassword);
  if(pass == "correct"){
    const checkGmail = await prisma.users.findMany({ // => Check if gmail already in use.
      where:{
        gmail: usersGmail
      }
    });

    if(checkGmail.Length === 0){ // => If so, error!
      res.json({
        "error": "gmail address is already taken. Please enter valid gmail address"
      });
    }
    else{
      if(!gmailcheck(usersGmail)){ // => Package Validator. Check string structure (...@gmail.com)
        res.json({"error": "invalid gmail address"})
      }
      else{
        const salt = await bcrypt.genSalt(); // Generate hash for passwords. Package ByCrypt
        const hashedPassword = await bcrypt.hash(usersPassword, salt);

        const insertuser = await prisma.users.create({ // Insert new user
          data:{
            username: usersName,
            userpassword: hashedPassword,
            gmail: usersGmail,
            permission: 1
          }
        });

        sendGmail(usersGmail);

        res.json(insertuser);
      }
    }
  }
  else{
    res.json({
      "error": pass
    })
  }
});

function gmailcheck(gmail){
  return valid.isEmail(gmail)
}

async function sendGmail(address){
  const message = await fs.promises.readFile('./html/welcomeMessage.html', 'utf8')
  const mailpayload = {
    "to": address,
    "subject": "Welcome to ShopChap",
    "message": message
  }

  fetch(webhookurl,{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mailpayload)
  });
}

function passwordCheck(password){
  const digitpattern = /[0-9]/g; // Password must have at least 4 digits
  const upperpattern = /[A-Z]/g; // Password must have at least 4 capital chars
  const specialpattern = /[^\w\s]/g; // Password must have at least 2 special chars
  
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
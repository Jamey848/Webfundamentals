// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient(); // Hey this is sort of like ContextDB in c#...

// --------------------------------------------
// [GET] artists 
// return array of artists
// --------------------------------------------

router.get('/', async(req, res) => { //Async = Wacht op antwoord op database
  const us = await prisma.users.findMany();
  res.json(us);
})

// --------------------------------------------
// [POST] artists 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------

router.post('/', async(req, res) => { 
  const artistName = req.body.name;
  
  const artistExists = await prisma.artists.findMany({
    where:{
      name: artistName
    }
  });
  
  if(artistExists.length > 0){
    res.json({
      "status": "artist already in database"
    });
  }
  else{
    const newArtist = await prisma.artists.create({
      data:{
        name:artistName
      }
    });
    res.json(newArtist);
  }
  
  //console.log(artistName);
  //@todo: link to database
  //req.body
  res.send("Added artists");
})

// --------------------------------------------
// [DELETE] artists 
// return boolean (true or false)
// --------------------------------------------

router.delete('/:id', async(req, res) => {
  const artistID = req.params.id;

  console.log(artistID);

  const deleteArtist = await prisma.artists.delete({
    where:{
      artist_id: parseInt(artistID)
    }
  });
  res.send(deleteArtist);
})

// --------------------------------------------
// [PUT] artists 
// return boolean (true or false)
// --------------------------------------------

router.put('/:id', async(req, res) => {
  let artistID = req.params.id;
  let name = req.body.name;

  let updatedArtist = await prisma.artists.update({
    where:{
      artist_id: parseInt(artistID)
    },
    data:{
      name
    }
  })
  res.json(updatedArtist);
})

/*router.get('/:id', (req, res) => {
  let selectedGoat = null;
  goats.forEach((goat) => {
    if(goat.id == req.params.id){
      selectedGoat = goat;
    }
  })
  //console.log(req.params.id);
  res.json(selectedGoat);
})*/

module.exports = router;
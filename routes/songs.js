// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] songs 
// return array of songs
// --------------------------------------------

router.get('/', async(req, res) => { 
  const songs = await prisma.songs.findMany({
    include:{
      artists: true
    }
  });
  res.json(songs);
})

// --------------------------------------------
// [POST] song 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------

router.post('/', async(req, res) => { 
  const artistID = req.body.artistID;
  const songName = req.body.name;

  const songExists = await prisma.songs.findMany({
    where:{
      artist_id: artistID,
      name: songName
    }
  });
  if(songExists.Length > 0){
    req.json("Status: song already added to database");
  }
  else{
    const newSong = await prisma.songs.create({
    data:{
      artist_id: artistID,
      name: songName
    }
    });
    //req.body
    res.send(newSong);
  }
})

// --------------------------------------------
// [DELETE] song 
// return boolean (true or false)
// --------------------------------------------

router.delete('/:id', async(req, res) => {
  const songID = req.params.id;

  console.log(songID);

  const deleteSong = await prisma.songs.delete({
    where:{
      song_id: parseInt(songID)
    }
  });
  console.log(deleteSong);
})

// --------------------------------------------
// [PUT] song 
// return boolean (true or false)
// --------------------------------------------

router.put('/:id', async(req, res) => {
  let songID = req.params.id;
  let name = req.body.name;
  let artistID = req.body.artist_id;

  let updatedSong = await prisma.songs.update({
    where:{
      song_id: parseInt(songID)
    },
    data:{
      name,
      artist_id: parseInt(artistID)
    }
  });
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
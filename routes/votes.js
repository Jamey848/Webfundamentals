// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

router.get('/', async(req, res) => {
  const votes = await prisma.votes.findMany({
    include:{
      songs: true
    }
  });
  res.json(votes);
})

// --------------------------------------------
// [POST] vote 
// return id (id can be null, in which case it didn't work)
// --------------------------------------------

router.post('/', async(req, res) => { 
  const songId = req.body.song_id; // Give songname? 
  const points = req.body.point;

  const songExist = await prisma.songs.findMany({
    where:{
      song_id: songId
    }
  });
  
  if(songExist.length > 0)
  {
    req.json("Status: songId does not exist");
  }
  else{
    const newVote = await prisma.votes.create({
    data:{
      song_id: songId, 
      points
    }                  
    });
    res.send(newVote);
  }
});


module.exports = router;
// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

// --------------------------------------------
// [GET] ranking 
// return array of ranking
// --------------------------------------------

router.get('/', async(req, res) => { 
  const ranking = await prisma.$queryRaw`SELECT SA.name, ART.name, sum(points) as totalpoints FROM votes AS VO
  INNER JOIN songs AS SA ON VO.song_id = SA.song_id
  INNER JOIN artists as ART ON SA.artist_id = ART.artist_id
  GROUP BY SA.name, ART.name ORDER BY totalpoints DESC;`

  res.json(ranking);
})

module.exports = router;
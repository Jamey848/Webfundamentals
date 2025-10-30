// --------------------------------------------
// Import Packages
// --------------------------------------------
const express = require('express');
const router = express.Router();

// --------------------------------------------
// [GET] countries 
// return array of countries
// --------------------------------------------

router.get('/', (req, res) => { 
  // @todo: Link to database
  res.json([]);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const config = require('config');

// @route       GET api/team
// @dsc         get the team info
// @access      Public
router.get('/team', (req, res) => {
  console.log('We are Connected!🎉');
  return res.json({
    msg: 'hello there!!',
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Team = require('../models/team');

// @route       GET api/team
// @dsc         get the team info
// @access      Public
router.get('/team', async (req, res) => {
  try {
    let team = await Team.find({}).select('-__v');
    return res.json({ team });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/team
// @dsc         add new team member
// @access      Public
router.post(
  '/team',
  [
    check('name', 'Please add a name').notEmpty(),
    check('img', 'Please add img url').notEmpty(),
    check('designation', 'Please add description').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, img, designation } = req.body;

    try {
      let user = new Team({
        name,
        img,
        designation,
      });

      await user.save();
      return res.json({
        msg: 'user succesfully saved!',
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

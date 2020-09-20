const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Sponsor = require('../models/sponsor');

// @route       GET api/team
// @dsc         get the team info
// @access      Public
router.get('/sponsor', async (req, res) => {
  try {
    let sponsor = await Sponsor.find({}).select('-__v');
    return res.json({ sponsor });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/team
// @dsc         add new team member
// @access      Public
router.post(
  '/sponsor',
  [
    check('name', 'Please add a name').notEmpty(),
    check('description', 'Please add description').notEmpty(),
    check('link', 'Please add a link').notEmpty(),
    check('logo', 'Please add logo url').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, link, logo } = req.body;

    try {
      let sponsor = new Sponsor({
        name,
        description,
        link,
        logo,
      });

      await sponsor.save();
      return res.json({
        msg: 'sponsor succesfully saved!',
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Patronages = require("../models/patrons");

// @route       GET api/v1/patrons
// @dsc         get the patrons info
// @access      Public
router.get("/patrons", async (req, res) => {
  try {
    let patrons = await Patronages.find({}).select("-__v");
    return res.json({ patrons });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error.");
  }
});

// @route       POST api/v1/patrons
// @dsc         add new patron
// @access      Public
router.post(
  "/patrons",
  [
    check("name", "Please add a name").notEmpty(),
    check("img", "Please add img url").notEmpty(),
    check("designation", "Please add description").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, img, designation } = req.body;

    try {
      let patron = new Patronages({
        name,
        img,
        designation,
      });

      await patron.save();
      return res.status(201).json({
        success: true,
        message: "patron succesfully saved!",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error.");
    }
  }
);

module.exports = router;

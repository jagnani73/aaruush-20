const mongoose = require('mongoose');

const PatronagesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('patronages', PatronagesSchema);

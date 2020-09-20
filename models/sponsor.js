const mongoose = require('mongoose');

const SponsorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('sponsor', SponsorSchema);

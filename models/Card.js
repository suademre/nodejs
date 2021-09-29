const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      reguired: true,
    },
    author: {
      type: String,
      reguired: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Card', schema)

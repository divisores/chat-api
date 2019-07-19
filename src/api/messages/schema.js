const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  value: {
    type: String,
    require: true
  },
  direction: {
    type: String,
    required: true
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  }
})

module.exports = mongoose.model('Messages', MessageSchema)

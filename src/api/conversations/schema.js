const mongoose = require('mongoose')

const ConversationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Conversations', ConversationSchema)

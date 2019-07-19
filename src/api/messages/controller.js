const Message = require('./schema')

const MessageController = {
  createMessage: ({ value, direction, conversationId }) => (
    Message.create({ value, direction, conversation: conversationId })
  )
}

module.exports = MessageController

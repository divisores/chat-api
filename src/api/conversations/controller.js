const Conversation = require('./schema')
const Message = require('../messages/schema')

const ConversationController = {
  getConversations: () => (
    Conversation.find()
  ),

  getConversation: async (conversationId) => {
    const conversation = await Conversation.findById(conversationId)
    const messages = await Message.find({
      conversation: conversationId
    })

    const withMessages = {
      conversation: conversation.name,
      messages
    }

    return withMessages
  },

  createConversation: ({ name }) => (
    Conversation.create({ name })
  )
}

module.exports = ConversationController
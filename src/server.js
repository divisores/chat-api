const express = require('express')
const bodyParser = require('body-parser')

const { SERVER_PORT } = require('./settings')

const ConversationController = require('./api/conversations/controller')
const MessageController = require('./api/messages/controller')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/conversation', async (req, res) => {
  const conversations = await ConversationController.getConversations()
  res.send(conversations)
})

app.get('/conversation/:id', async(req, res) => {
  const conversation = await ConversationController.getConversation(req.params.id)
  res.send(conversation)
})

app.post('/conversation', async (req, res) => {
  const conversation = await ConversationController.createConversation(req.body)
  res.send(conversation)
})

app.post('/message', async (req, res) => {
  const message = await MessageController.createMessage(req.body)
  res.send(message)
})

module.exports = {
  startServer: () => {
    app.listen({ port: SERVER_PORT }, () => {
      console.log(`🚀 Server ready at http://localhost:${SERVER_PORT}`)
    })
  }
}

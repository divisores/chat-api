# Mini CHAT API

Simple API to create conversations and send messages

## How to use

### Get all conversations

endpoint: ``

response
```
```

Properties

- name: Conversation name

### Get conversation detail

endpoint: ``

response:
```
```

Properties

- value: Message body, ex: "Hey man what's up?"
- direction
  - `incoming` means received messages
  - `outgoing` means sended messages

## Contributing

- Clone this repo
- Run `yarn` or `npm install`
- Create `settings.js` inside src folder based on `src/settings.example.js`
- Run `yarn start` to start development server
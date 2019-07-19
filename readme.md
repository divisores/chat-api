# Mini CHAT API

Simple API to create conversations and send messages

## How to use

### Get all conversations

endpoint: `https://chat-api-bhmzbezkwb.now.sh/conversations`

response
```
[
    {
        "_id": "5d311e3942d9de6a2f9ea9c1",
        "name": "Fulano da Silva",
        "__v": 0
    },
    {
        "_id": "5d311e5142d9de6a2f9ea9c2",
        "name": "Sirlene Santos",
        "__v": 0
    },
    {
        "_id": "5d311e5842d9de6a2f9ea9c3",
        "name": "Josue pereira",
        "__v": 0
    },
    ...
]
```

Properties

- name: Conversation name

### Get conversation detail

endpoint: `https://chat-api-bhmzbezkwb.now.sh/conversations/:id`

response:
```
{
    "conversation": "Fulano da Silva",
    "messages": [
        {
            "_id": "5d31227c070d5d6d1c38aaa3",
            "value": "Hey",
            "direction": "incoming",
            "conversation": "5d311e3942d9de6a2f9ea9c1",
            "__v": 0
        },
        {
            "_id": "5d312284070d5d6d1c38aaa4",
            "value": "Hey, how have you been?",
            "direction": "outgoing",
            "conversation": "5d311e3942d9de6a2f9ea9c1",
            "__v": 0
        },
        ...
    ]
}
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
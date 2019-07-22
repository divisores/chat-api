# Mini CHAT API

Simple API to create conversations and send messages

## How to use

### Get all conversations

endpoint: `https://webchatapi.herokuapp.com/conversations`

response
```
[
    {
        "_id": "5d35bcd6ce827600040936d0",
        "name": "Kurzurlg"
    },
    {
        "_id": "5d35bcdace827600040936d1",
        "name": "Cadar"
    },
    {
        "_id": "5d35bce9ce827600040936d4",
        "name": "Felagodoa"
    }
]
```

Properties

- name: Conversation name

### Get conversation detail

endpoint: `https://webchatapi.herokuapp.com/conversations/:id`

response:
```
{
    "conversation": "Cadar",
    "messages": [
        {
            "_id": "5d35c14dce827600040936e0",
            "value": "Please call me I need to speak to you",
            "direction": "incoming",
            "conversation": "5d35bcdace827600040936d1"
        },
        {
            "_id": "5d35c15dce827600040936e1",
            "value": "Barbara needs help",
            "direction": "incoming",
            "conversation": "5d35bcdace827600040936d1"
        },
        {
            "_id": "5d35c183ce827600040936e2",
            "value": "Sure, What's her number?",
            "direction": "outgoing",
            "conversation": "5d35bcdace827600040936d1"
        }
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
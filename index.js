require('dotenv').config();
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const apiKey = process.env.GROUPME_API_KEY;
const botId = process.env.GROUPME_BOT_ID;

const keywords = {
  'hi': ['Hey there!', 'Hello', 'Hi!'],
  'bye': ['Bye!', 'Goodbye.', 'So long!'],
  // Add more keywords and corresponding response arrays here
};

function sendMessage(text) {
  axios.post(`https://api.groupme.com/v3/bots/post`, {
    bot_id: botId,
    text: text,
  }).catch((error) => {
    console.error('Error sending message:', error);
  });
}

app.post('/incoming', (req, res) => {
  const message = req.body;

  if (message.sender_type !== 'bot') {
    const messageText = message.text.toLowerCase();
    for (const keyword in keywords) {
      if (messageText.includes(keyword.toLowerCase())) {
        const responses = keywords[keyword];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        sendMessage(randomResponse);
        break;
      }
    }
  }

  res.status(200).send('OK');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`GroupMe bot listening on port ${port}`);
});

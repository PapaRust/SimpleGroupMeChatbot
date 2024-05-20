This GroupMe bot is designed to listen for incoming messages within a GroupMe group chat and respond with a pre-configured message if a keyword is detected in the message. The bot will randomly choose a response from a list of possible responses associated with the keyword.

# Prerequisites
1. Node.js (version 12 or higher) installed on your system. You can download it from the official Node.js website.
2. A GroupMe account and a group chat where you want the bot to operate. You can create an account on the GroupMe website.
3. A GroupMe bot created for the group chat. You can create a bot by visiting the GroupMe Developers page.

# Installation
- Create a new directory on your local system for the bot and navigate to it in your terminal.


`mkdir groupme-bot`

`cd groupme-bot`

- Initialize a new Node.js project in the directory.

`npm init -y`

- Install the required dependencies: axios, dotenv, and express.

`npm install axios dotenv express body-parser`

- Copy the files named index.js, package.json, and package-lock.json into the project directory. If required, modify the specified port in the index.js file to match the port utilized by your bot.

- Copy the file named .env into the project directory, and add your GroupMe API key and bot ID:

`GROUPME_API_KEY=your_groupme_api_key`

`GROUPME_BOT_ID=your_groupme_bot_id`

- Replace your_groupme_api_key with your actual GroupMe API key and your_groupme_bot_id with the bot ID you received when creating the bot.

- Edit the keywords object in the index.js file to configure your desired keywords and their corresponding response arrays. By default, it contains two keywords, "hi" and "bye", each with an array of three possible text responses.

```
const keywords = {
  'hi': ['Hey there!', 'Hiya chief', 'Hey how are you?'],
  'bye': ['Goodbye! Have a great day!', 'See you later!', 'Bye, take care!'],
  // Add more keywords and corresponding response arrays here
};
```




const fs = require("fs");
module.exports.config = {
  name: "Khan",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Khan") ||
     react.includes("@Illıllı Aɭoŋɘ Illıllı 🥵") || react.includes("boyfriend") || react.includes("@Illıllı Aɭoŋɘ Illıllı") ||
react.includes("Khan") ||
react.includes("Khan") ||     
react.includes("Khan")) {
    var msg = {
        body: `KHAN BOSS ABHI BUJI HAI APNI WIFE AYESHA KE SATH ME UNKO DISTURB NA KRO OKK😡😡`,attachment: fs.createReadStream(__dirname + `/noprefix/bf.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

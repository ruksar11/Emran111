const fs = require("fs");
module.exports.config = {
        name: "love",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "uzairrajput", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "love",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("LoVe")==0 || event.body.indexOf("LOVE")==0 || event.body.indexOf("Love")==0 || event.body.indexOf("love")==0) {
                var msg = {
                                body: "𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐘𝐄𝐒𝐇𝐀 𝐊𝐄 𝐇𝐀𝐒𝐁𝐄𝐍𝐃 𝐍𝐀𝐌𝐄 𝐓𝐎 𝐀𝐀𝐏𝐊𝐎 𝐏𝐓𝐀 𝐇𝐈 𝐇𝐎𝐆𝐀 𝐊𝐇𝐀𝐍 𝐁𝐎𝐒𝐒 ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/55CA6A84-5F69-4408-ADDA-B58A36FE521E.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

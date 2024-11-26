module.exports.config = {
  name: "dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "suheb",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "dp",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const path = require("path");

  const cachePath = path.join(__dirname, "cache");
  if (!fs.existsSync(cachePath)) fs.mkdirSync(cachePath);

  var link = [
    "https://i.imgur.com/aEnAJb7.jpeg",
    "https://i.imgur.com/EIUb4Pv.jpeg",
    "https://i.imgur.com/AB6FntS.jpeg",
    "https://i.imgur.com/9nVrzuZ.jpeg",
    // Add more links here...
  ];

  const imageUrl = link[Math.floor(Math.random() * link.length)];
  const imagePath = path.join(cachePath, "1.jpg");

  request(encodeURI(imageUrl))
    .on("error", (err) => {
      console.error(err);
      return api.sendMessage("Kuch galat ho gaya! Dobara try karein.", event.threadID);
    })
    .pipe(fs.createWriteStream(imagePath))
    .on("close", () => {
      try {
        api.sendMessage(
          {
            body: `𝙂𝙞𝙛𝙩𝙚𝙙 𝘽𝙮 𝐬𝐮𝐡𝐞𝐛😍😁 -.-`,
            attachment: fs.createReadStream(imagePath),
          },
          event.threadID,
          () => fs.unlinkSync(imagePath)
        );
      } catch (err) {
        console.error(err);
        api.sendMessage("Image bhejne me error hua.", event.threadID);
      }
    });
};

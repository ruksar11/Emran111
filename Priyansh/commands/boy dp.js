module.exports.config = {
  name: "boydp",
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
"https://i.imgur.com/ah5R0xs.jpeg",
"https://i.imgur.com/ANmwFDa.jpeg",
"https://i.imgur.com/sBmsKw3.jpeg",
"https://i.imgur.com/DcDfIE6.jpeg",
"https://i.imgur.com/KeF9rLQ.jpeg",
"https://i.imgur.com/RMMlByy.jpeg",
"https://i.imgur.com/Ebw0OAL.jpeg",
"https://i.imgur.com/ClfsLax.jpeg",
"https://i.imgur.com/SrdHDHg.jpeg",
"https://i.imgur.com/ToFXleT.jpeg",
"https://i.imgur.com/AfuA3Bz.jpeg",
"https://i.imgur.com/4OVMS1T.jpeg",
"https://i.imgur.com/lgUGvZC.jpeg",
"https://i.imgur.com/Wa6r1op.jpeg",
"https://i.imgur.com/oAM5JFm.jpeg",
"https://i.imgur.com/2g5PcdA.jpeg",
"https://i.imgur.com/L1kuExm.jpeg",
"https://i.imgur.com/OPrqgru.jpeg",
"https://i.imgur.com/paRre6h.jpeg",
"https://i.imgur.com/7WvgzsT.jpeg",
"https://i.imgur.com/a3uKpVd.jpeg",
"https://i.imgur.com/bZi5iY5.jpeg",
"https://i.imgur.com/urP6muk.jpeg",
"https://i.imgur.com/FFtKp30.jpeg",
"https://i.imgur.com/w3DMQWE.jpeg",
"https://i.imgur.com/SNrvqrv.jpeg",
"https://i.imgur.com/KWVWoCV.jpeg",
"https://i.imgur.com/6NMZlcu.jpeg",
"https://i.imgur.com/ceGP1Z4.jpeg",
"https://i.imgur.com/alJecKL.jpeg",
"https://i.imgur.com/vJpvKpZ.jpeg",
"https://i.imgur.com/3gnaEpH.jpeg",
"https://i.imgur.com/4R1x0Gw.jpeg",
"https://i.imgur.com/P8FHmL4.jpeg",
"https://i.imgur.com/le77qOC.jpeg",
"https://i.imgur.com/yMxKZqs.jpeg",
"https://i.imgur.com/lo1GYXH.jpeg",
"https://i.imgur.com/hhCMx2a.jpeg",
"https://i.imgur.com/v2eRQ35.jpeg",
"https://i.imgur.com/wf3GAGd.jpeg",
"https://i.imgur.com/ZrsRvjn.jpeg",
"https://i.imgur.com/8i8yc9V.jpeg",
"https://i.imgur.com/n1QglnG.jpeg",
"https://i.imgur.com/lOGNZCx.jpeg",
"https://i.imgur.com/7vpegrT.jpeg",
"https://i.imgur.com/LErO6wp.jpeg",
"https://i.imgur.com/aLcZ6Eo.jpeg",
"https://i.imgur.com/cnIpu4A.jpeg",
"https://i.imgur.com/a4b8OyP.jpeg",
"https://i.imgur.com/KFbCKSW.jpeg",
"https://i.imgur.com/ofRr9An.jpeg",
"https://i.imgur.com/Fma3ALs.jpeg",
"https://i.imgur.com/m0wg4kU.jpeg",
"https://i.imgur.com/TrQXnEm.jpeg",
"https://i.imgur.com/IdoWgQB.jpeg",
"https://i.imgur.com/mMOSmSW.jpeg",
"https://i.imgur.com/z7PJhVt.jpeg",
"https://i.imgur.com/IN5Z4KW.jpeg",
"https://i.imgur.com/bRK3stG.jpeg",
"https://i.imgur.com/MakoJBa.jpeg",
"https://i.imgur.com/0o8jjCc.jpeg",
"https://i.imgur.com/iYnThO8.jpeg",
"https://i.imgur.com/fUg6YiU.jpeg",
"https://i.imgur.com/U9LX9w9.jpeg",
"https://i.imgur.com/xDUCMMi.jpeg",
"https://i.imgur.com/UFx1bEs.jpeg",
"https://i.imgur.com/Huq9ycz.jpeg",
"https://i.imgur.com/h5WbfXi.jpeg",
"https://i.imgur.com/w8MN8iH.jpeg",
"https://i.imgur.com/IhOZj6Z.jpeg",
"https://i.imgur.com/Tl6POeE.jpeg",
"https://i.imgur.com/2vqGmPU.jpeg",
"https://i.imgur.com/Lo2qsGc.jpeg",
"https://i.imgur.com/jPBbCxB.jpeg",
"https://i.imgur.com/7Z9Ir2Q.jpeg",
"https://i.imgur.com/WmoBUuB.jpeg",
"https://i.imgur.com/tc80U9v.jpeg",
"https://i.imgur.com/FNMUkM5.jpeg",   
"https://i.imgur.com/JpWop1I.jpeg",
"https://i.imgur.com/azwvNJq.jpeg",
"https://i.imgur.com/m63M6b2.jpeg",
"https://i.imgur.com/z2ZLXPn.jpeg",
"https://i.imgur.com/fshWxXh.jpeg",
"https://i.imgur.com/WGrxgTF.jpeg",
"https://i.imgur.com/aOemRG5.jpeg",
"https://i.imgur.com/GLYesC4.jpeg",
"https://i.imgur.com/WXeVESR.jpeg",
"https://i.imgur.com/kCNfNVQ.jpeg",
"https://i.imgur.com/kp5F4Cm.jpeg",
"https://i.imgur.com/I7Traoj.jpeg",
"https://i.imgur.com/4CEMlJy.jpeg",
"https://i.imgur.com/6TeNkoQ.jpeg",
"https://i.imgur.com/H4b1epD.jpeg",
"https://i.imgur.com/fFBGqck.jpeg",
"https://i.imgur.com/A71PEBQ.jpeg",
"https://i.imgur.com/iGeRbeE.jpeg",
"https://i.imgur.com/VOGZqkj.jpeg",
"https://i.imgur.com/dONPkCp.jpeg",
"https://i.imgur.com/M91q41l.jpeg",
"https://i.imgur.com/wjpIPLw.jpeg",
"https://i.imgur.com/CYyzesF.jpeg",
"https://i.imgur.com/ozlkbcX.jpeg",
"https://i.imgur.com/l6gpjAU.jpeg",
"https://i.imgur.com/APTZJ2x.jpeg",
"https://i.imgur.com/oNWgxr8.jpeg",
"https://i.imgur.com/xU90hWp.jpeg",
"https://i.imgur.com/RiiazVM.jpeg",
"https://i.imgur.com/nPtvMVx.jpeg",
"https://i.imgur.com/Yl1uS7I.jpeg",
"https://i.imgur.com/CMlAcVC.jpeg",
"https://i.imgur.com/M6untxc.jpeg",
"https://i.imgur.com/koHoZJM.jpeg",
"https://i.imgur.com/2rbphvz.jpeg"
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
            body: `𝙂𝙞𝙛𝙩𝙚𝙙 𝘽𝙮  𝐊𝐇𝐀𝐍 🥰🤗 -.-`,
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
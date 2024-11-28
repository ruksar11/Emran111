const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by mr Romiyo",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["TUM MERE BOSS SHAAN KI GF BAN JAO LDKI🙈🙈" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi🤬" , "Tu Bandh nhi Karega kya?" , "Where is my SHAAN KHAN" , "Mera babu SHAAN KHAN Kahan hai" , "Aree Bandh kar Bandh Kar" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " SHAAN Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍""mujhe Patna itna asan hai jitna meggi bana😂😂👈, "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Zehar piyo zindagi jio" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Kisi din Banungi me raja ki rani😑" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but buri harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾 " , "kyun Bulaya hamen..😾 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "amy")) {
     return api.sendMessage("Prefix Kon Lagayega chwl? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };

   if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
     return api.sendMessage("babu solly 😭", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "Logos") || (event.body.toLowerCase() == "Logo")) {
     return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS, ANIMATE, LOGODIAMOND, LOGOCAPTAIN, LOGOFISH, LOGOCOLORBLUR, LOGOBLOODTEXT, LOGOWOOD, LOGOCUP          🥀for example -> +crack Shaan Khan", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("good morning god bless you dude💓", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi hai kiya")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "meri setting kahan hai") || (event.body.toLowerCase() == "meri gf kha hai")) {     return api.sendMessage("️️️Jaan Main Hoon Na Tumhari setting", threadID);
   };

   if ((event.body.toLowerCase() == "dilshad") || (event.body.toLowerCase() == "Song") || (event.body.toLowerCase() == "SONG") || (event.body.toLowerCase() == "song")) {
     return api.sendMessage( "Guzaare the jo lamhe pyar ke' hmesha tujhe apna maan ks .to fir tune badli kuu ada . ye kyu kiy ",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "bot ka malik")) {
     return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ☞ ༻☞[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟𝙎𝙝𝙖𝙖𝙣 𝙠𝙝𝙖𝙣🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝙎𝙝𝙖𝙖𝙣. ☜ ༺༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- https://www.facebook.com/.shankhank.345 ☞    his insta id @𝙎𝙃𝘼𝘼𝙉 𝙆𝙃𝘼𝙉 𝙆 ☜ ༺༒ ༒", threadID);
   };

   if ((event.body.toLowerCase() == "tera Malik kon hai") || (event.body.toLowerCase() == "is bot ka malik kon hai")) {
     return api.sendMessage("Shaan Khan 𝐔𝐫𝐟 Shaani  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "tera admin kon hai") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("My admin is 𝙎𝙝𝙖𝙖𝙣 𝙠𝙝𝙖𝙣. He Gives his name mr Shaan everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji")) {S    return api.sendMessage("🤍Hanji jaann🙈✨", threadID);
   };

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {;
    return api.sendMessage("️️️BYE BYE TAKE CARE  UMMAHHH 😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahungi 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolungi", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi krugi 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage(" jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "bot kiss me") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apne Boss ko kiss karna chahti hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tarref karte hai meri.🙈🙈🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😈")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi, Chalo Ek chappal khao 🩴🩴🩴 aur shant rho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐬𝐚𝐝 𝐌𝐚𝐭 𝐡𝐨 , 𝐁𝐚𝐭𝐚𝐨 𝐤𝐲𝐚 𝐡𝐮𝐚🤗😇", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️️️Hmm Hmm kya kr rha🙄 muhh me se supari nikal kr bat kr re baba😜🤪😂😂🙂🙂🙂🙂", threadID);
   };

  if ((event.body.toLowerCase() == "ptoge") || (event.body.toLowerCase() == "patogi")) {     return api.sendMessage("️️️nikal tharki group se remove kar dougi", threadID);
   };

  if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {     return api.sendMessage("️️️ITNE MUJHE I LOVE YOU BOL RHI HO MERE BOSS SHAAN KHAN URF SHANI KO BOLO BAHUT HI ACHA BNDA HAI MERA BOSS ", threadID);
   };
  if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "miss you")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
   };

  if ((event.body.toLowerCase() == "i miss you bot") || (event.body.toLowerCase() == "miss u")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
   };

  if ((event.body.toLowerCase() == "💚")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍 ", threadID);
   };

  if ((event.body.toLowerCase() == "👌")) {return api.sendMessage("Tussi osssam ho👌👌👌 ", threadID);
   };

  if ((event.body.toLowerCase() == "☺️")) {return api.sendMessage("Wah kiya mushkurakat hai Apki 😀😂😂  ", threadID);
   };

  if ((event.body.toLowerCase() == "😤")) {return api.sendMessage("KIYA HUA ITNI MIRCHI KYU KHAYA THA JO NAK ME SE DUA NIKAL GYA 😂😂  ", threadID);
   };

  if ((event.body.toLowerCase() == "☺️☺️")) {return api.sendMessage("Wah kiya mushkurakat hai Apki 😀😂😂  ", threadID);
   };

  if ((event.body.toLowerCase() == "😂")) {return api.sendMessage("Aise hi hste rha kro jaanu hste hue kitni achi lgti hai tum😂😂  ", threadID);
   };

  if ((event.body.toLowerCase() == "😂😂")) {return api.sendMessage("Aise hi hste rha kro jaanu hste hue kitni achi lgti hai tum😂😂  ", threadID);
   };
  if ((event.body.toLowerCase() == "😉")) {return api.sendMessage("aankh na maar thrkii mashom hu me 🥺🥺", threadID);
   };

  if ((event.body.toLowerCase() == "😎😎😎")) {return api.sendMessage("chashma hatao na sahab Kya naam hai apka 😅", threadID);
   };

  if ((event.body.toLowerCase() == "😜😜")) {return api.sendMessage("Ghndy ishary na kro me Ali jan ko bata dongi 🥺 ", threadID);
   };

if ((event.body.toLowerCase() == "❤️❤️")) {return api.sendMessage("bndr jaisi shakl pr dil rakh kr khush ho rhy 🤣 ", threadID);
   };

if ((event.body.toLowerCase() == "🙄🙄🙄")) {return api.sendMessage("oper kya hai janu Meri aankho me dekho na🙈🙈", threadID);
   };

if ((event.body.toLowerCase() == "❤️❤️❤️")) {return api.sendMessage("dil na do kisi ko log tor de dety hain 🥺🥺 ", threadID);
   };

if ((event.body.toLowerCase() == "😍😍😍")) {return api.sendMessage("bndr jaisi shakl pr dil rakh kr khush ho rhy 🤣 ", threadID);
   };

  if ((event.body.toLowerCase() == "❤️")) {return api.sendMessage("MEKO KALA DIL CHAHIYE 🙂✨LAL TUT JATA ", threadID);
   };

  if ((event.body.toLowerCase() == "🥰🥰🥰🥰")) {return api.sendMessage("OoHH KIYA BAAT AJ HAPPY HAPPY 🤣", threadID);
   };

if ((event.body.toLowerCase() == "😍😍")) {return api.sendMessage("IS NAZAR SE SHAAN KHAN KO DEKHO PYARA NA LAGY PAISE WAPIS 😝😂 ", threadID);
   };

if ((event.body.toLowerCase() == "😎😎")) {return api.sendMessage("CHALA JAA ....🤣🤣🤝🏻", threadID);
   };

if ((event.body.toLowerCase() == "😋😋")) {return api.sendMessage("😒GHR WALO JY AJ ROTI NHI DALI 🤣🤝🏻", threadID);
   };

if ((event.body.toLowerCase() == "🧐🧐")) {return api.sendMessage("KIYA DEKH RAHA PAPA KI BARAT A RAHI 😝", threadID);
   };

if ((event.body.toLowerCase() == "🥰🥰🥰")) {return api.sendMessage("TU TOO GYAA BETYYY 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🥵")) {return api.sendMessage("KUTTY PICHY PAR GAY THY KIYA BHAI 😒", threadID);
   };

if ((event.body.toLowerCase() == "😍")) {return api.sendMessage("IS NAZAR SE MERE OWNER SHAAN KO DEKHO MAZA NA AY TO PAISE WAPIS 😝😂 ", threadID);
   };

if ((event.body.toLowerCase() == "😎")) {return api.sendMessage("Chasma hatao na sahab kiya naam hai apka😜😜", threadID);
   };

if ((event.body.toLowerCase() == "😋")) {return api.sendMessage("GHR WALO NY KHANA NHI DALA AJ TUJH 🥺", threadID);
   };

if ((event.body.toLowerCase() == "🧐")) {return api.sendMessage("KIYA DEKH RAHA PAPA KI BARAT A RAHI KIYA  😝", threadID);
   };

if ((event.body.toLowerCase() == "🥰🥰")) {return api.sendMessage("TU TO GAYA BETYY 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😁")) {return api.sendMessage("lgta hai aaj brush kiye ho😜😜😂 ", threadID);
   };

  if ((event.body.toLowerCase() == "🫣")) {return api.sendMessage("Sarmo mat apna hi gher samjho 😼 ", threadID);
   };

if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("Hot chiz dekhi nhi ki lar tpkana suru kr dete ho srm kro CHWLI walo🤭😜😜😂 😂😂😂😂", threadID);
   };

if ((event.body.toLowerCase() == "🙂")) {return api.sendMessage("KOI MUH NAHI LAGATA KAM SE KAM SAKAL TO ACHE SE BANA LE 😂😂😂😂", threadID);
   };

if ((event.body.toLowerCase() == "🤣")) {return api.sendMessage("Thoda Kam Has Warna sir fod dungi tera✊🤐😏😹😜", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "🙁")) {
     return api.sendMessage("️𝐊𝐲𝐚 𝐡𝐮𝐚 𝐑𝐨 𝐊𝐲𝐮 𝐑𝐚𝐡𝐞 𝐡𝐨 ,𝐌𝐞 𝐡𝐮 𝐟𝐢𝐫 𝐤𝐲𝐮 𝐑𝐨𝐧𝐚 😇😇.", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "Bot ke bache") || (event.body.toLowerCase() == "Bot ka bacha")) {
     return api.sendMessage("️mera baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andhi Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalam u walaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
    return api.sendMessage("️ walaikum assalam 🙃♥", threadID);
   };

   if ((event.body.toLowerCase() == "Ib aa") || (event.body.toLowerCase() == "Inbox aa")) {
     return api.sendMessage("️Jo bolna hak yhi bol 😒😒 ib koi nahi jayega", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️𝐇𝐚𝐚 𝐄𝐬𝐞 𝐡𝐢 𝐍𝐚𝐳𝐫𝐞 𝐧𝐢𝐜𝐡𝐢 𝐫𝐤𝐡𝐚 𝐤𝐫𝐨 𝐦𝐞𝐫𝐞 𝐬𝐚𝐦𝐧𝐞 👇", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️𝐒𝐚𝐦𝐣𝐡 𝐍𝐚𝐡𝐢 𝐚𝐭𝐚 , 𝐭𝐮𝐦 𝐛𝐢𝐧𝐚 𝐝𝐢𝐦𝐚𝐠 𝐤𝐞 𝐤𝐞𝐬𝐞 𝐬𝐨𝐜𝐡 𝐥𝐞𝐭𝐞 𝐡𝐨 🤨😮🧐", threadID);
   };

if ((event.body.toLowerCase() == "💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
   };

if ((event.body.toLowerCase() == "💋💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
   };
if ((event.body.toLowerCase() == "🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };

if ((event.body.toLowerCase() == "🤪🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };

if ((event.body.toLowerCase() == "🤩")) {return api.sendMessage("suna tha star ✨ ⭐ ✨ aasman me hote hai par teri to ankho par ⭐ hai ✨✨⭐😜😜😂 ", threadID);
  };

if ((event.body.toLowerCase() == "😘")) {return api.sendMessage("Pehle  Brush Karke aa ajeeb si smail aa ri hai😹🤣😂 ", threadID);
  };

if ((event.body.toLowerCase() == "😛")) {return api.sendMessage("Jibh kyu latk gyii..🤭 aajao panii pii lo🫗🍷😜😹🤣😂 ", threadID);
   };

  if ((event.body.toLowerCase() == "💝")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___Liya___🌿___mujhse____🌿🌹❣️__________________?🥰❤️ ", threadID);
   };

  if ((event.body.toLowerCase() == "🙈🙈")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho", threadID);
   };

if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho😝😂 ", threadID);
   };

if ((event.body.toLowerCase() == "😎😎")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 😜😜", threadID);
   };

if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 😀😀", threadID);
   };

if ((event.body.toLowerCase() == "🙉")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 🤣", threadID);
   };

if ((event.body.toLowerCase() == "🙈")) {return api.sendMessage("Muje pata h tum 👉🐒Bander ho🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🖤")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___mujhse____🌿🌹❣️__________________?🥰❣️❣️🥰❤️‍🩹 ", threadID);
   };

if ((event.body.toLowerCase() == "😏")) {
     return api.sendMessage("Sdaa hua muhh kyu bnaa rhe..🤦‍♂️kisi ne dil chura liya kya🤭😂", threadID);
   };
if ((event.body.toLowerCase() == "🤐")) {
     return api.sendMessage("muhh bnd kyuu kr liya babuaa 😜😝😜", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️🙄 samne hu samne dekh upper kiya dekh rha hai ullu 🗡️🙄", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
   };

   if ((event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M To cute hu aap batao kese ho 🤭☺️", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "Paani lao") || (event.body.toLowerCase() == "Ek glass paani lao")) {
     return api.sendMessage("Aap juice piyo baby🍹🍹🍹🍹🍹🙈", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "ilove you")) {
     return api.sendMessage("Love You too meri jaann ummah 😘😘💋💋", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️ Romiyo Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "arman") || (event.body.toLowerCase() == "disha") || (event.body.toLowerCase() == "main romiyo") || (event.body.toLowerCase() == "main saho") || (event.body.toLowerCase() == "main rounak")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `»🇵🇰${name}🇵🇰« 

❖•━━━━━🙂━━━━━•❖,


${rand}                                        

𝗖𝗿𝗲𝗱𝗶𝘁𝘀:𒁍≛⃝𝙎𝙝𝙖𝙖𝙣 𝙠𝙝𝙖𝙣 ❥||ㅎ

❖•━━━━━🙂━━━━━•❖`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

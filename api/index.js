const express = require('express');

const app = express();



app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET');

  next();

});



const heavyMessages = [

    `🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁Κ𝑈 𝐾𝐼 𝐵𝐻𝐸Ν 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁Κ𝑈-𝑃ΑΝΚ𝑈 𝐾𝐼 𝐵𝐻ΕΝ 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃Α𝑅 𝐿𝑂𝐷Ε 𝑀Α𝑅𝑈 ꧂ズ👙🎭`,

    

    `🪄🔨༆𖣘︎ ᴏʏᴇ ᴛᴇʀᴇ ᴀɴᴋᴜ-ᴘᴀɴᴋᴜ ᴋɪ ᴍᴀᴀ ᴀᴜʀ ʙʜᴇɴ ᴋɪ ᴄʜᴜᴛ ᴘᴀʀ ʜᴀᴛᴏᴅᴇ ᴍᴀʀᴜ𖣘︎༆🔨🪄\n🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨\n🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨\n🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨\n🪄🔨༆𖣘︎ ᴏʏᴇ ᴛᴇʀᴇ ᴀɴᴋᴜ-ᴘᴀɴᴋᴜ ᴋɪ ᴍᴀᴀ ᴀᴜʀ ʙʜᴇɴ ᴋɪ ᴄʜᴜᴛ ᴘᴀʀ ʜᴀᴛᴏᴅᴇ ᴍᴀʀᴜ𖣘︎༆🔨🪄`,

    

    `💫🔦༒︎ㇽ𝙊𝙔𝙀 𝙏𝙀𝙍𝙀 𝘼𝙉𝙆𝙐-𝙋𝘼𝙉𝙆𝙐 𝙆𝙄 𝙈𝘼𝘼 𝙆𝙊 𝙏𝙊𝙍𝘾𝙃 𝙁𝙀𝙆 𝙆𝘼𝙍 𝙈𝘼𝙍𝙐ㇽ༒︎🔦💫\n🔦🔦🔦🔦🔦\n💫🔦༒︎ㇽ𝙊𝙔𝙀 𝙏𝙀𝙍𝙀 𝘼𝙉𝙆𝙐-𝙋𝘼𝙉𝙆𝙐 𝙆𝙄 𝙈𝘼𝘼 𝙆𝙊 𝙏𝙊𝙍𝘾𝙃 𝙁𝙀𝙆 𝙆𝘼𝑅 𝙈𝘼𝙍𝙐ㇽ༒︎🔦💫`

];



app.get('/api', (req, res) => {

  // 10 messages ka batch ek saath

  const batch = Array.from({length: 4}, () => 

    heavyMessages[Math.floor(Math.random() * heavyMessages.length)]

  );

  res.json({ messages: batch });

});



module.exports = app;

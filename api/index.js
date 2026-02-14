const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/', (req, res) => {
  // Stream response enable
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Transfer-Encoding': 'chunked'
  });
  
  const messages = [
    "🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁𝐾𝑈 𝐾𝐼 𝐵𝐻𝐸𝑁 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁𝐾𝑈 𝐾𝐼 𝐵𝐻𝐸𝑁 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁𝐾𝑈 𝐾𝐼 𝐵𝐻𝐸𝑁 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n👞👞👞👞👞👞👞👞👞👞\n🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁𝐾𝑈 𝐾𝐼 𝐵𝐻𝐸𝑁 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Stream mein bhej
  res.write(JSON.stringify({ message: randomMessage }));
  res.end();
});

module.exports = app;

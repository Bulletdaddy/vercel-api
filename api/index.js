const express = require('express');
const app = express();

// CORS headers - Automa ko connection allow karenge
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

// 👇 YEH IMPORTANT HAI - ROOT ROUTE
app.get('/', (req, res) => {
  // Stream response enable
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Transfer-Encoding': 'chunked'
  });
  
  const messages = [
    "🎭👙ズ꧁𝑂𝑌𝐸 𝑇𝐸𝑅𝐸 𝐴𝑁𝐾𝑈-𝑃𝐴𝑁𝐾𝑈 𝐾𝐼 𝐵𝐻𝐸𝑁 𝐾𝐼 𝐶𝐻𝑈𝑇 𝑃𝐴𝑅 𝐿𝑂𝐷𝐸 𝑀𝐴𝑅𝑈 ꧂ズ👙🎭"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // JSON response bhejo
  res.write(JSON.stringify({ message: randomMessage }));
  res.end();
});

// 👇 YEH BHI IMPORTANT HAI - VERCELL ke liye
module.exports = app;

const express = require('express');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  return "Ok";
});

export default app;

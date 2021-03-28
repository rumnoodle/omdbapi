const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/search', (req, res) => {
  const search = req.query.s;
  const omdbApiKey = "[your-key-here]";
  const omdbApiUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`

  if (!search) {
    // use this response format to mimic the one returned from omdb.
    res.json({
      Response: 'False',
      Error: 'Search can not be empty',
    });
    return;
  }

  fetch(`${omdbApiUrl}&s=${search}`)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    });
});

export default app;

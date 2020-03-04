const express = require('express'),
      request = require('request');

const app = express();
const PORT = 3042;

app.use('/check-cert', express.static('public/mock-check-cert'));

app.use('/fsdata', function(req, res) {
  request("https://status.fsdata.se/feed").pipe(res);
});

app.use('/bible', function(req, res) {
  request("http://www.bibeln.se/rss/dagens-bibelord.xml").pipe(res);
});

app.use('/adventofcode', function(req, res) {
  request("https://adventofcode.com/2019/leaderboard/private/view/629785.json", {
    headers: {
      'cookie': 'session=53616c7465645f5f5cf1d5e937baa87579f3295a1446f3e2842c681159671c04973c17e6df02eaca4b5e1ef6fb8f2ee4'
    }
  }).pipe(res);
})

app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
});
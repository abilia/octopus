const express = require('express'),
      request = require('request');

const app = express();
const PORT = 3042;

app.use('/check-cert', express.static('public/mock-check-cert'));

app.use('/fsdata', function(req, res) {
  request("https://status.fsdata.se/feed").pipe(res);
});

app.use('/bible', function(req, res) {
  request("https://old.bibeln.se/rss/dagens-bibelord.xml").pipe(res);
});

app.use('/adventofcode', function(req, res) {
  request("https://adventofcode.com/2019/leaderboard/private/view/629785.json").pipe(res);
})

app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
});
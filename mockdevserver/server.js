const express = require('express'),
      request = require('request');

request.debug = true;

const app = express();
const PORT = 3042;

app.use('/check-cert', express.static('public/mock-check-cert'));

app.use('/fsdata', function(req, res) {
  request({uri: "https://status.fsdata.se/feed", rejectUnauthorized: false}).pipe(res);
});

app.use('/bible', function(req, res) {
  request("https://old.bibeln.se/rss/dagens-bibelord.xml").pipe(res);
});

app.use('/adventofcode', function(req, res) {
  request("https://adventofcode.com/2019/leaderboard/private/view/629785.json",{
    header: { "Cookie": "session=53616c7465645f5f970f30563bb0e3df1de796b6ee916f5871203e9ea90798c632c8e8784f551e21cf6dc0c9c1d44887" }
  }).pipe(res);
})

app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
});
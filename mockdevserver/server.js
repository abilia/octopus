const express = require('express');

const app = express();
const PORT = 3042;

app.use('/check-cert', express.static('public/mock-check-cert'));

app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
});
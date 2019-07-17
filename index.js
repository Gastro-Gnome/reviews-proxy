const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const proxy = require('express-http-proxy');

app.use(express.static(path.join(__dirname, './public')));
app.use('/reviews', proxy('127.0.0.1:3003'));
app.use('/photos', proxy('127.0.0.1:3001'));

app.get('/', (req, res) => {
  res.end();
})

app.listen(port, () => {
  console.log(`Reviews server is running on port ${port}`);
});
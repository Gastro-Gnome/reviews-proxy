const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

const proxy = require('express-http-proxy');

app.use(express.static(path.join(__dirname, './public')));
app.use('/reviews', proxy('13.52.99.182:1337', {
  proxyReqPathResolver: req => {
    if(req.url === '/dist/bundle.js') {
      return req.url;
    } else {
      return '/reviews' + req.url
    }
  }
}));

app.use('/photos', proxy('52.90.9.19', {
  proxyReqPathResolver: req => {
    if(req.url === '/main.js') {
      return req.url;
    } else {
      return '/photos' + req.url;
    }
  }
}));

app.get('/', (req, res) => {
  res.end();
})

app.listen(port, () => {
  console.log(`Reviews server is running on port ${port}`);
});
do
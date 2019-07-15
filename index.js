const express = require('express');
const path = require('path');

// const { getBusinessReviews } = require('../database/reviews');

const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, '../public')));

// app.param('busId', (req, res, next, business) => {
//   req.business = getBusinessReviews(business, (err, business) => {
//     if (err) return next(err);
//   })
//     .then((business) => {
//       req.business = business;
//       next();
//     });
// });

// app.get('/reviews/:busId', ((req, res, next) => {
//   res.send(req.business);
// }));

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Reviews server is running on port ${port}`);
});

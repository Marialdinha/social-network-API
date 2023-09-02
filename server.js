// Importing packages and files
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Environment variables
const PORT = process.env.PORT || 3001;
const app = express();

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.get('/all-books', async (req, res) => {
//   try {
//     const result = await Book.find({});
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get('/sum-price', async (req, res) => {
//   try {
//     const result = await Book
//       .aggregate([
//         { $match: { inStock: true } },
//         {
        
//           $group: {
//             _id: null,
//             sum_price: { $sum: '$price' },
//             avg_price: { $avg: '$price' },
//             max_price: { $max: '$price' },
//             min_price: { $min: '$price' },
//           },
//         },
//       ]);
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Conncting to MongoDB and starting the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

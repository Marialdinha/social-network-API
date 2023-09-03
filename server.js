// Importing packages and files
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

// Environment variables
const PORT = process.env.PORT || 3001;
const app = express();

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Conncting to MongoDB and starting the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on directory ${cwd} on port ${PORT}!`);
  });
});

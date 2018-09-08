const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // db config
// const db = require('./config/keys').mongoURI;

// //Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

mongoose.promise = require('bluebird');

mongoose
  .connect(
    'mongodb://localhost/devconnector',
    { promiseLibrary: require('bluebird') }
  )
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});
app.use('/api/user', userRoutes);

app.use('/posts', (req, res, next) => {
  res.send('Hello from server');
});
module.exports = app;

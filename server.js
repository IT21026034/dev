const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const itemRouter = require('./routes/items.js');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URI;

app.use('/item', itemRouter);

mongoose
  .connect(URL)
  .then(() => {
    console.log('MongoDB Connection Successfull');
  })
  .catch((err) => {
    console.log('Connection Failed - ' + err);
  });

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});


// http://localhost:4000/Item

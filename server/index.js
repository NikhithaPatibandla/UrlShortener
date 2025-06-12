const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shortenRoutes = require('./routes/shorten');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', shortenRoutes);

mongoose.connect('mongodb://localhost:27017/urlshortener')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));

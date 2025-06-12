const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

const BASE_URL = "http://localhost:5000"; // adjust for deployment

router.post('/shorten', async (req, res) => {
  const { nanoid } = require('nanoid');
  const { originalUrl } = req.body;
  const shortCode = nanoid(6);

  const url = new Url({ originalUrl, shortCode });
  await url.save();

  res.json({ shortUrl: `${BASE_URL}/${shortCode}` });
});

router.get('/:code', async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });

  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

module.exports = router;

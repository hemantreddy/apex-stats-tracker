const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const apiKey = require('../config/keys').TRACKER_API_KEY;
const apiUrl = require('../config/keys').TRACKER_API_URL;

router.get('/:platform/:gamertag', async (req, res, next) => {
  try {
    const headers = {
      'TRN-Api-Key': apiKey,
    };
    const { platform, gamertag } = req.params;
    const response = await fetch(`${apiUrl}/profile/${platform}/${gamertag}`, {
      headers,
    });
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      res.status(404).json({
        message: 'Profile Not Found',
      });
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Server Error',
    });
  }
});

module.exports = router;

const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/:platform/:gamertag', async (req, res, next) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY,
    };
    const { platform, gamertag } = req.params;
    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
      {
        headers,
      }
    );
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

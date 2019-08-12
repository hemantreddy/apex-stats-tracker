const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());

// Dev Logging

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
  app.use(compression());
}

// Profile routes

app.use('/api/v1/profile', require('./routes/profile'));

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.resolve(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

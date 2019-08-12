const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());

// Dev Logging

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile routes

app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

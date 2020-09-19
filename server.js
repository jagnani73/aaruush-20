const express = require('express');
const connectDB = require('./database/db');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const teamRoute = require('./routes/team');

// Connect Database
connectDB();

app.use(bodyParser.json());

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/v1', teamRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./userRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse request body as JSON

// Use Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
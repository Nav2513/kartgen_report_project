const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/' , (req, res) => {
    res.send("Server is running!");
});

app.use('/api/auth', authRoutes);

module.exports = app;
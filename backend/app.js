const express = require('express'); 
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));



app.get('/' , (req, res) => {
    res.send("Server is running!");
});

app.use('/api/auth', authRoutes);

module.exports = app;
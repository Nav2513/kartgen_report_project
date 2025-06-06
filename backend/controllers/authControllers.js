const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require("../db/index");

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password)
        return res.status(400).json({ message: "Email and password are required"});

    try{
        const existUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (existUser.rows.length > 0)
            return res.status(409).json({ message: "User already exist"});

        const hashedPassword = await bcrypt.hash(password, 12);

        await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);

        res.status(200).json({ message: "User created successfully"});
    } catch (error) {
        console.log("Signup Error", error);
        res.status(500).json({ message: "Server error"});
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password)
        return res.status(400).json({ message: "Email and password required"});

    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if(rows.length === 0)
            return res.status(404).json({ message: "User not found!"});

        const isMatch = await bcrypt.compare(password, rows[0].password);

        if(!isMatch)
            return res.status(401).json({ message: "Invalid credentials!"});

        const token = jwt.sign({ userId: rows[0].id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error"});
    };
}
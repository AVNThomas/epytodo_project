const application = require('express');
const bodyParser = require('body-parser');
const express = require('express')
const  dotenv = require('dotenv');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;
const user = require('./routes/user/user.js');
const auth = require('./routes/auth/auth.js');

//create conneection between server and database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'epytodo'
})

dotenv.config();
process.env.TOKEN_SECRET;

app.post('/register', express.json({type: '*/*'}), (req, res) => {
    auth.register(req, res, connection, app);
})

app.post('/login', express.json({type: '*/*'}), (req, res) => {
    auth.login(req, res, connection, app);
})

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/user', express.json({type: '*/*'}) , (req, res) => {
    user.displayuser(app, connection, req, res);
})

app.listen(port ,() => {
    console.log('app listen on port: ' + port)
})

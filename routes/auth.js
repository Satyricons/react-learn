const express = require("express");
const authRout = express.Router();
const {login, register} = require("../controllers/authControllers");

authRout.post('/login', login)
authRout.post('/register', register)

module.exports = authRout;

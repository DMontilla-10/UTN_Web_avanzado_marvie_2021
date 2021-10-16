const express = require("express");
const createNewUser = require('../controllers/sequelizeUsersController');

const sequelizeUserRoutes = express.Router();

sequelizeUserRoutes.post("/", createNewUser);

module.exports = sequelizeUserRoutes
const express = require("express");
const { createNewUser, getAllUsers } = require('../controllers/sequelizeUsersController');

const sequelizeUserRoutes = express.Router();

sequelizeUserRoutes.post("/", createNewUser);

sequelizeUserRoutes.get('/', getAllUsers)

module.exports = sequelizeUserRoutes
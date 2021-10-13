const express = require("express");
const {
  getMysqlUsers,
  createNewUser,
} = require("../controllers/mysqlUsersControllers");

const mysqlRoutes = express.Router();

mysqlRoutes.get("/allUsers", getMysqlUsers);

mysqlRoutes.post("/createUser", createNewUser);

module.exports = mysqlRoutes;

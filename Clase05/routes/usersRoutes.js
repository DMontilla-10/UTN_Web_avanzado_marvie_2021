const express = require("express");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);

//Capturar un parámetro
userRoutes.get("/:id", getUserById);

userRoutes.post("/", createNewUser);

userRoutes.put("/:id", updateUser);

// Manejo de peticiones DELETE
// Eliminación física: se borra el registro
userRoutes.delete("/:id", deleteUser);

// Eliminación lógica: se cambia el estado del registro

module.exports = userRoutes;

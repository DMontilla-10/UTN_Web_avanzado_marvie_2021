const express = require("express");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  loginUser,
  verifyToken
} = require("../controllers/usersController");

const userRoutes = express.Router();

userRoutes.get("/allUser", verifyToken, getAllUsers);

//Capturar un parámetro
userRoutes.get("/:id", getUserById);

userRoutes.post("/", createNewUser);

userRoutes.put("/:id", updateUser);

userRoutes.post('/loggin', loginUser);

// Manejo de peticiones DELETE
// Eliminación física: se borra el registro
userRoutes.delete("/:id", deleteUser);

// Eliminación lógica: se cambia el estado del registro

module.exports = userRoutes;

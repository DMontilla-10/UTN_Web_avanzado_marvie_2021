const express = require("express");
const { getAllUsers, getUserById } = require('../controllers/users')

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);

//Capturar un parámetro
userRoutes.get("/:id", getUserById);

userRoutes.post("/", (req, res) => {
  const { error } = validateUser(req.body.nombre);

  if (!error) {
    const user = {
      id: users.length + 1,
      nombre: req.body.nombre,
    };
    users.push(user);
    res.send(user);
  } else {
    res.status(400).send(error.details[0].message);
  }
});

userRoutes.put("/:id", (req, res) => {
  // Encontrar si existe el objeto usuario que queremos modificar
  let userFound = findUser(req.params.id);
  if (!userFound) res.status(400).send("Usuario no encontrado");

  //Validamos si el nombre ingresado es correcto
  const { error, value } = validateUserName(req.body.nombre);

  // console.log('Respuesta de validate: ', schema.validate({
  //   nombre: req.body.nombre,
  // }))

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const updateUser = userFound;
  updateUser.nombre = value.nombre;
  res.send(updateUser);
});

// Manejo de peticiones DELETE
// Eliminación física: se borra el registro
userRoutes.delete("/:id", (req, res) => {
  let userFound = findUser(req.params.id);
  if (!userFound) res.status(400).send("Usuario no encontrado");

  const index = users.indexOf(userFound);
  users.splice(index, 1);

  res.send(userFound);
});

// Eliminación lógica: se cambia el estado del registro

module.exports = userRoutes;

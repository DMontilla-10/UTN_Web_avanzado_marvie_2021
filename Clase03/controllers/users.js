const users = [
  { id: 1, nombre: "Daniel", status: "ACTIVE" },
  { id: 2, nombre: "Sol", status: "ACTIVE" },
  { id: 3, nombre: "Antonela", status: "ACTIVE" },
];

const getAllUsers = (req, res) => {
  res.send(users);
};

const getUserById = (req, res) => {
  let userFound = findUser(req.params.id);
  if (!userFound) res.status(404).send("Usuario no encontrado");
  res.send(userFound);
};

// Funciones de validación
const findUser = (id) => {
  return users.find((user) => user.id === parseInt(id));
};

const validateUserName = (elNombre) => {
  const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
  });
  return schema.validate({
    nombre: elNombre,
  });
};

module.exports = {
  getAllUsers,
  getUserById
};

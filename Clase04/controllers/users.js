const { User } = require('../Model/user') ;

const users = [
  { id: 1, nombre: "Daniel", status: "ACTIVE" },
  { id: 2, nombre: "Sol", status: "ACTIVE" },
  { id: 3, nombre: "Antonela", status: "ACTIVE" },
];

const getAllUsers = (req, res) => {
  User.find().then((data) => {
    console.log('Data: ', data)
    res.json(data)
  }).catch(error => {
    console.log(error)
  })
};

const getUserById = (req, res) => {
  let userFound = findUser(req.params.id);
  if (!userFound) res.status(404).send("Usuario no encontrado");
  res.send(userFound);
};

const createNewUser = () => {
  // Guardar nueva data en Mongo
  const data = {
    firstName: "Daniel",
    lastName: "Montilla",
  };

  const newUser = new User(data);

  newUser.save((error) => {
    if (error) {
      console.log("Oooops, ocurrió un error");
    } else {
      console.log("Nuevo usuario guardado exitosamente !!!");
    }
  });
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
  getUserById,
  createNewUser
};

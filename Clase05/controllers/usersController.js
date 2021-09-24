const { User } = require("../Model/userModel");

const users = [
  { id: 1, nombre: "Daniel", status: "ACTIVE" },
  { id: 2, nombre: "Sol", status: "ACTIVE" },
  { id: 3, nombre: "Antonela", status: "ACTIVE" },
];

const getAllUsers = (req, res) => {
  User.find()
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({ data: user });
  } catch (error) {
    res.status(404).send({ error: "Usuario no encontrado" });
  }
};

// const getUserById = (req, res) => {
//   User.findById(req.params.id)
//     .then((resp) => {
//       res.send({ data: resp });
//     })
//     .catch((err) => {
//       res.send({ mensaje: "ocurió un error" });
//     });
// };

const createNewUser = (req, res) => {
  // Guardar nueva data en Mongo
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
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

// const updateUser = async (req, res) => {
//   try {
//     // 1° Verificar si el Id pertenece a algun usuario de la DB
//     const user = await User.findById(req.params.id);
//     // Modificar el objecto obtenido con los datos del body de la request
//     Object.assign(user, req.body);
//     // Guardar los datos actualizados en la DB
//     user.save();
//     res.send(user);
//   } catch (error) {
//     res.status(404).send({ error: "Usuario no encontrado!!" });
//   }
// };

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)
    res.send({ success: 'Usuario actualizado correctamente!!'})
  } catch (error) {
    res.status(404).send({ error: "Usuario no encontrado!!" });
  }
};

const deleteUser = async (req, res) => {
  try {const user = await User.findByIdAndRemove(req.params.id)
  res.send({ data: user })} catch(err) {
    res.status(404).send({ error: 'Usuario no encontrado!! '})
  }
}

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
  createNewUser,
  updateUser,
  deleteUser
};

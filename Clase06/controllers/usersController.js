const { User } = require("../Model/userModel");
const bcryptjs = require("bcryptjs");
const { generateAccessToken } = require("../validate/validations");
require("dotenv").config();

const getAllUsers = (req, res) => {
  User.find()
    .then((data) => {
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

const createNewUser = async (req, res) => {
  const user = await User.find().where({ email: req.body.email });
  if (user[0]) return res.status(400).json({error: 'Email already exist'})

  // Antes de guardar el password lo encriptamos
  const password = await bcryptjs.hash(req.body.password, 10);

  // Guardar nueva data en Mongo
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: password,
    email: req.body.email,
  };

  const newUser = new User(data);

  newUser.save((error) => {
    if (error) {
      console.log("Oooops, ocurrió un error");
      res.send(error);
    } else {
      console.log("Nuevo usuario guardado exitosamente !!!");
      return res.status(200).send(newUser);
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
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send({ success: "Usuario actualizado correctamente!!" });
  } catch (error) {
    res.status(404).send({ error: "Usuario no encontrado!!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send({ data: user });
  } catch (err) {
    res.status(404).send({ error: "Usuario no encontrado!! " });
  }
};

const loginUser = async (req, res) => {
  const user = await User.find().where({ email: req.body.email });
  if (user[0]) {
    const hashPassword = user[0].password;

    const password = req.body.password;
    const compare = await bcryptjs.compare(password, hashPassword);

    if (compare) {
      const userData = {
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
      };
      const accessToken = await generateAccessToken(userData);
      res.json({ status: "OK", token: accessToken });
    } else {
      res.json({ status: "El email o contraseña son incorrectos" });  
    }
  } else {
    res.json({ status: "El email o contraseña son incorrectos" });
  }
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
  createNewUser,
  updateUser,
  deleteUser,
  loginUser,
};

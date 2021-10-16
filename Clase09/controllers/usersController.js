const { User } = require("../Model/userModel");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();

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

const createNewUser = async (req, res) => {
  // Antes de guardar el password lo encriptamos
  const password = await bcryptjs.hash(req.body.password, 10) 

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
      res.send(error)
    } else {
      console.log("Nuevo usuario guardado exitosamente !!!");
      res.send(newUser)
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

const loginUser = async (req, res) => {
  const accessToken = await generateAccessToken()
  res.send({token: accessToken})

  // const user = await User.find().where({email: req.body.email})
  // const hashPassword = user[0].password;

  // const password = req.body.password
  // const compare = await bcryptjs.compare(password, hashPassword)

  // if(compare) {
  //   res.json({status: 'OK'})
  // } else {
  //   res.json({ status: 'El email o contraseña son incorrectos'})
  // }
}

const generateAccessToken = async () => {
  const user = {
    email: 'daniel@gmail.com',
    password: '123456'
  }

  const token = await jwt.sign(user, process.env.PRIVATE_KEY, {expiresIn: '1h'})
  return token
}

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if(token){
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
      if(err) {
        return res.json({ message: 'Invalid token'})
      } else {
        req.decoded = decoded;
        next()
      }
    })
  } else {
    res. send({ message: 'Forget token'})
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
  deleteUser,
  loginUser,
  verifyToken
};

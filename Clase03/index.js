const express = require("express");
require("dotenv").config();
const Joi = require("joi");

const app = express();

const port = process.env.PORT;

//Middlewares
app.use(express.json());

const users = [
  { id: 1, nombre: "Daniel" },
  { id: 2, nombre: "Sol" },
  { id: 3, nombre: "Antonela" },
];

// app.get() //pedimos datos
// app.post() //enviamos datos
// app.put() //actualizamos datos
// app.delete() //eliminamos datos

//www.midominio.com/

https: app.get("/", (req, res) => {
  res.send("Hola curso!!");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

//Capturar un parámetro
app.get("/api/users/:id", (req, res) => {
  let userFound = users.find((user) => user.id === parseInt(req.params.id));
  console.log("valor de userFound: ", userFound);
  console.log("valor de userFound negado: ", !userFound);
  if (!userFound) res.status(404).send("Usuario no encontrado");
  res.send(userFound);
});

//Capturar más de un parámetro
app.get("/api/users/:year/:month/:day", (req, res) => {
  res.send(req.params);
});

//Capturar un dato de query string
app.get("/api/users-sex/", (req, res) => {
  res.send(req.query);
});

app.post("/api/users", (req, res) => {
  const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
  });

  const { error } = schema.validate({
    nombre: req.body.nombre,
  });

  if (!error) {
    const user = {
      id: users.length + 1,
      nombre: req.body.nombre,
    };
    users.push(user);
    res.send(user);
  } else {
    res.status(400).send(error.details[0].message)
  }
});

app.put('/api/users/:id', (req, res) => {
  // Encontrar si existe el objeto usuario que queremos modificar
  let userFound = users.find((user) => user.id === parseInt(req.params.id));
  if (!userFound) res.status(404).send("Usuario no encontrado");

  //Validamos si el nombre ingresado es correcto
  const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
  });

  // console.log('Respuesta de validate: ', schema.validate({
  //   nombre: req.body.nombre,
  // }))

  const { error, value } = schema.validate({
    nombre: req.body.nombre,
  });

  if(error) {
    res.status(400).send(error.details[0].message)
    return;
  }

  const updateUser = userFound
  updateUser.nombre = value.nombre
  res.send(updateUser)
})

//Si hay más de un dato por query string
//En el navegador vamos a tener una ruta de la siguiente forma
//localhost:port/ruta/?key=valor&key=valor

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

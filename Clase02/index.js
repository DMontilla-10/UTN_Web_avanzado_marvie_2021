const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT;

//Middlewares
app.use(express.json())

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

app.post('/api/users', (req, res) => {
    console.log('Array de usuarios antes del post: ', users)
    if(!req.body.nombre || req.body.nombre === '' ) {
        res.status(400).send('Debe ingresar un nombre')
        return;
    }
    if(req.body.nombre.length < 3) {
        res.status(400).send('El nombre debe tener al menos 3 letras')
        return
    }
    const user = {
        id: users.length + 1,
        nombre: req.body.nombre
    }
    res.send(user)
    users.push(user)
    console.log('Array de usuarios después del post: ', users)
});

//Si hay más de un dato por query string
//En el navegador vamos a tener una ruta de la siguiente forma
//localhost:port/ruta/?key=valor&key=valor

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

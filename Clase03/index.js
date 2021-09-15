const express = require("express");
require("dotenv").config();
const Joi = require("joi");
const userRoutes = require('./routes/users')

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());
app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

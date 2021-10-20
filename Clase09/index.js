const express = require("express");
const { connection } = require("./config/mySqlconfig");
const sequelizeUserRoutes = require("./routes/sequelizeUsersRoutes");
require("dotenv").config();
const userRoutes = require("./routes/usersRoutes");
require("./config/mongoConfig");

const app = express();
const port = process.env.PORT;

// Conexion a MySQL
connection();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/sequelize/users", sequelizeUserRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

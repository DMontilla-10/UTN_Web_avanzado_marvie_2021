const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/usersRoutes");
const mysqlRoutes = require("./routes/mysqlUsersRoutes");
require("./config/database");
// require('./config/mysql')
const mysqlConnection = require("./config/mysql");

const app = express();
const port = process.env.PORT;

// Conexion a MySQL
mysqlConnection.connect;

//Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/mysql/api/users", mysqlRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

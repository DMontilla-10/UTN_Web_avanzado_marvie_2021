const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/usersRoutes");
require('./config/database')

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

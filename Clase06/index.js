const express = require("express");
const cors = require('cors');
require("dotenv").config();
const userRoutes = require("./routes/usersRoutes");
require('./config/database')

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

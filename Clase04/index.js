const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/users");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongo está conectado exitosamente !!!");
});

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

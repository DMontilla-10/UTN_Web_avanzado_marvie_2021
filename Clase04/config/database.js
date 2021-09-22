const mongoose = require("mongoose");
require("dotenv").config();

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
  
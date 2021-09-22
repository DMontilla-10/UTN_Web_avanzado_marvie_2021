const express = require("express");
const userRoutes = require("./routes/users");
require('./config/database')

//app.get('/api', (req, res)=>{
//  User.find().then((data)=>{
//    console.log('Data: ', data)
//    res.json(data)
//  }).catch(error => {
//    console.log(error)
//  })
//})

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}...`);
});

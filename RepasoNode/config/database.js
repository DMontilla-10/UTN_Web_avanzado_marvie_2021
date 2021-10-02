require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

mongoose.connection.on('connected', ()=>{
    console.log('Conexión a MongoDBAtlas exitosa')
})

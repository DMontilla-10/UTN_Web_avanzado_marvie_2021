const express = require('express')
require('dotenv').config()
require('./config/database')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.listen(process.env.port, () => {
    console.log(`Servidor corriendo en puerto ${process.env.port}...`)
})
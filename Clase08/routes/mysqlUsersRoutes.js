const express = require("express");
const mysqlConnection = require("../config/mysql");

const mysqlRoutes = express.Router();

mysqlRoutes.get('/allUsers', (req, res)=>{
    mysqlConnection.query("select * from usuarios", (error, data)=>{
        if(error) {
            console.log(error)
        } else {
            res.status(200).send({ data: data})
        }
    })
})

module.exports = mysqlRoutes
const express = require('express');
const {createNewUser, getAllUsers, updateUser} = require('../controllers/userControllers');

const userRoutes = express.Router();

userRoutes.post('/registro', createNewUser)

userRoutes.get('/allUsers', getAllUsers)

userRoutes.put('/updateUser/:id', updateUser)

module.exports = userRoutes
const User = require('../Model/userSequelizeModel')

const createNewUser = async () => {
    const newUser = await User.create({
        firstName: 'Fernando',
        lastName: 'Saavedra',
        email: 'amanda@gmail.com',
        password: '123456',
    })
    console.log(`${newUser.firstName} tiene un id autogenerado de valor ${newUser.id}`)
}

const getAllUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.status(200).send(allUsers)
}

module.exports = { createNewUser, getAllUsers }
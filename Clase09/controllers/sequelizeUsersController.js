const User = require('../Model/userSequelizeModel')

const createNewUser = async() => {
    const newUser = await User.create({
        firstName: 'Fernando',
        lastName: 'Saavedra',
        email: 'amanda@gmail.com',
        password: '123456',
    })
    console.log(`${newUser.firstName} tiene un id autogenerado de valor ${newUser.id}`)
}

module.exports = createNewUser
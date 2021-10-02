const userModel = require('../Models/userModel')

const createNewUser = (req, res) => {
    const newUser = new userModel(req.body)

    newUser.save().then(response=>{
        res.send({ message: 'Usuario creado'})
    }).catch(error => {
        res.send(error)
        res.end()
    })
}

const getAllUsers = (req, res) => {
    userModel.find().then(response =>{
        res.send(response)
    }).catch(error=>{
        console.log(error)
    })
}

const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(user)   
    } catch (error) {
        res.status(404).send({ error: 'Usuario no encontrado'})
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser
}
const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
})

// Model
const User = mongoose.model('User', UserSchema)

module.exports = { User }
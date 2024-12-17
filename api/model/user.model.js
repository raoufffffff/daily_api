const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: String,
    phone: String,
})


const User = mongoose.model('user', user)

module.exports = User 
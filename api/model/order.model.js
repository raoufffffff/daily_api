const mongoose = require('mongoose')

const order = new mongoose.Schema({
   user: String,
   price: Number,
   ride: Number,
   location: { },
   phone: String,
   createdAt: {
    type: Date,
    default: Date.now,
   },
   items: []
})


const Order = mongoose.model('order', order)

module.exports = Order 
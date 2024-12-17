const mongoose = require('mongoose')

const item = new mongoose.Schema({
    name: String,
    img: String,
    price: Number,
    offer: Boolean,
    out: Boolean,
    type: String,
    newprice: Number
})


const Item = mongoose.model('item', item)

module.exports = Item 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ItemRoute = require('./routes/item.route');
const OrderRoute = require('./routes/order.route');
require('dotenv').config()




const app = express()
app.use(cors());
app.use(express.json())
app.use('/item', ItemRoute)
app.use('/order', OrderRoute)


app.get('/', (req, res) => {
    res.send("hello world")
})



app.listen(3000, () => console.log("Server ready on port 3000."));
const DB = process.env.MONGODB_APP_PASSWORD
mongoose
    .connect(DB)
    .then(() => {
        console.log("mriglla")

    })
    .catch(err => console.log(err))
module.exports = app;
const OrderRoute = require('express').Router()
const Oder = require('../model/order.model')

OrderRoute.get('/', async (req, res)=>{
    try {
       const items = await Oder.find()
       res.send({good: true, result: items, length: items.length}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.post('/', async (req, res)=>{
    const {body} = req
    try {
       const items = await Oder.create(body)
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})


OrderRoute.delete('/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Oder.findByIdAndDelete(id)
       res.send({good: true, result: items, length: items.length}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

module.exports = OrderRoute

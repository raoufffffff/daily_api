const OrderRoute = require('express').Router()
const Oder = require('../model/order.model')

OrderRoute.get('/', async (req, res)=>{
    try {
       const items = await Oder.find({ delevred: false, cancel: false, take: false})
       res.send({good: true, result: items, length: items.length}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Oder.findById(id)
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/cancel/show', async (req, res)=>{
    try {
       const items = await Oder.find({cancel: true, delevred: false, take: false})
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/cancel/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Oder.findByIdAndUpdate(id, {cancel: true, take: false, delevred: false})
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})



OrderRoute.get('/done/show', async (req, res)=>{
    try {
       const items = await Oder.find({delevred: true, cancel: false, take: false})
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/take/show', async (req, res)=>{
    try {
       const items = await Oder.find({take: true, cancel: false, delevred: false})
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/take/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Oder.findByIdAndUpdate(id, {take: true, cancel: false, delevred: false})
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

OrderRoute.get('/done/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Oder.findByIdAndUpdate(id, {delevred: true, take: false, cancel: false})
       res.send({good: true, result: items}) 
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

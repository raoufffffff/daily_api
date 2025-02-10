const ItemRoute = require('express').Router()
const Item = require('../model/item.model')

ItemRoute.get('/', async (req, res)=>{
    try {
       const items = await Item.find()
        for(let i = 0; i < items.length; i++){
        await Item.findByIdAndUpdate(items[i]._id, {img: "https://i.ibb.co/MxZPJ8jm/IMG-20250210-180507.png"})
        }
       res.send({good: true) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

ItemRoute.get('/bar/:id', async (req, res) => {
    const { id } = req.params
    try {
        const items = await Item.findOne({ barecode: id })
        res.send({ good: true, result: items })
    } catch (error) {
        res.send({ good: false, message: error.message })
    }
})

ItemRoute.put('/type', async (req, res)=>{
    const {id} = req.params
    const {type, offer} = req.body
    try {
        let items;
        if(offer){
             items = await Item.find({ offer: true})
        }else{
             items = await Item.find({ type: type})
        }
       res.send({good: true, result: items, length: items.length}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

ItemRoute.get('/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Item.findById(id)
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

ItemRoute.post('/', async (req, res)=>{
    const {body} = req
    try {
       const items = await Item.create(body)
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

ItemRoute.put('/:id', async (req, res)=>{
    const {id} = req.params
    const {body} = req
    try {
       const items = await Item.findByIdAndUpdate(id, body)
       res.send({good: true, result: items}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

ItemRoute.delete('/:id', async (req, res)=>{
    const {id} = req.params
    try {
       const items = await Item.findByIdAndDelete(id)
       res.send({good: true, result: items, length: items.length}) 
    } catch (error) {
        res.send({good: false, message: error.message})
    }
})

module.exports = ItemRoute

const express = require('express');
const { route } = require('express/lib/application');
const router =express.Router();
const Item = require('../models/item')

//get all
router.get('/', async (req,res)=>{
    try {
        const items = await Item.find()
        //sends all the items object as a json
        res.json(items)
    } catch (err) {
        res.status(500).json({messsage:err.messsage})
    }
})
//get one 
router.get('/:id', getItem,(req,res)=>{
    res.json(res.item)
})
//create one
router.post('/', async(req,res)=>{
    const item = new Item({
        item_name: req.body.item_name,
        item_type: req.body.item_type
    })
    try {
        const newItem =await item.save()
        res.status(200).json(newItem)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})
//update one

//delete one
router.delete('/:id', getItem, async(req,res)=>{
    try {
        await res.item.remove()
        res.json({message:'Deleted Successfully'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})


// 
async function getItem(req,res,next){
    let item
    try {
        item = await Item.findById(req.params.id)
        if(item==null){
            // object not found
            return res.status(404).json({message:'Cannot find item'})
        }
    } catch (error) {
        return res.status(500).json({message:err.message})

    }
    res.item=item
    next()

}

module.exports=router
const mongoose =require ("mongoose")

const itemSchema = new mongoose.Schema({
    item_name:{
        type:String,
        required: true
    },
    item_type:{
        type:String
    },
    in_stock:{
        type:Boolean
    }
})


module.exports = mongoose.model("Item",itemSchema)
const express = require('express')
const router =express.Router();

router.get('/', (req,res)=> {
    res.send("Hello World")    
})


// async function getItem(req,res,next){
//     let item
//     try{
//     }
// }
module.exports=router
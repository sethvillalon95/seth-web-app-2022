require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connect to the db
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).catch(err=>{
    console.log(Error,err.message)
    console.log('error comming from the catch statement')
}).then(()=>{
    console.log('DB connected successfully!')
    app.use(express.json());
    const itemsRouter = require('./routes/items')
    app.use('/items',itemsRouter)
    const portNum = process.env.PORTNUM;
    app.listen(portNum, ()=> console.log('Listening to port: '+ portNum))

}

)

// const db = mongoose.connection;
// db.on('error',(error)=> console.log(error));
// db.once('open',()=>console.log('Connected to DB'));




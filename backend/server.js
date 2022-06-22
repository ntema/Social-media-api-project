const express= require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT||5505
const dbURI = process.env.MONGO_URI
const mongoose = require('mongoose')

const app = express()

const conn = mongoose.connect(dbURI)
.then(()=>{
    console.log(`mongoDb connected successfully`)
})
.catch((err)=>{
    console.log(err)
})


//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/api/auth', require('./routes/authRoutes/userRegisterRoute'))
app.use('/api/auth', require('./routes/authRoutes/userLoginRoute'))
app.use('/api/users', require('./routes/userRoutes/getUserRoute'))
app.use('/api/users', require('./routes/userRoutes/followUserRoute'))
app.use('/api/users', require('./routes/userRoutes/updateUserRoute'))
app.use('/api/users', require('./routes/userRoutes/deleteUserRoute'))






app.listen(port, ()=>{
    console.log('app listening on port '+port)
})
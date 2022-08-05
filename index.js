const express =  require('express')
const mongoose =  require('mongoose')
const env = require('dotenv').config()
const app =  express()

//routers


const authRouter =  require('./routers/Auth')
const postRouter = require('./routers/post')


//connect line


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
        console.log('mongodb connected succesfully')
}).catch((err)=>{ console.log(err)})

//middlwwares
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)


const port = process.env.PORT

app.listen(port, ()=>{console.log(`server is running on ${process.env.PORT}`)})

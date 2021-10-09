const express =require('express')
const mongoose= require('mongoose')

const programmerRoute= require('./router')

const app= express()

mongoose.connect('mongodb://localhost/programmerDB',{useNewUrlParser:true})
const conn= mongoose.connection

conn.on('open',()=>{
 console.log("DB connected")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/programmer',programmerRoute)

app.listen(9000,()=> console.log("SERVER RUNNING"))
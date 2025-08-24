require('dotenv').config()
const express = require("express")
const mongodb=require('mongoose')
const router=require('../session-8/routes/users.routes')
const app = express()

app.use(express.json())
mongodb.connect(process.env.URL)
    .then(()=>{
     app.listen(process.env.PORT, ()=>{
    console.log("connected to the server successfuly")}) 
        })
    .catch((error)=>{console.log("error connecting to database!")})
    
app.use("/users",router)
    



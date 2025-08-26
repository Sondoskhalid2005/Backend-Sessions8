require('dotenv').config()
const express = require("express")
const mongodb=require('mongoose')
const router=require('../session-8/routes/users.routes')
const {connectTodb}=require("../session-8/databseConnection/connectedb")
const app = express()

app.use(express.json())

// mongodb.connect(process.env.URL)
//     .then(()=>{
//      app.listen(process.env.PORT, ()=>{
//     console.log("connected to the server successfuly")}) 
//         })
//     .catch((error)=>{console.log("error connecting to database!")})
    

app.listen(3000, () => {
  connectTodb();
  console.log(`server is running `);

});

app.use("/users",router)
    



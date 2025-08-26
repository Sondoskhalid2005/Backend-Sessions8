require("dotenv").config();
const express = require("express");
const mongodb=require("mongoose")
const router = require("../session-8/routes/users.routes");
const app = express();

app.use(express.json());

mongodb
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to the server successfuly");
    });
  })
  .catch((error) => {
    console.log("error connecting to database!");
  });


// connectDB()
// .then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`server is running `);
//   });
// })
// .catch((error)=>{ 
// console.error("Error connecting to the database:", error.message); 
// })
app.use("/users", router);

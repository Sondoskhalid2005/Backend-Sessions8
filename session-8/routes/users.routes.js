const express=require("express")
const router= express.Router()
const userControllers=require('../controllers/users.controller')

router.post("/signup", userControllers.signup)
router.put("/addfriends/:userId", userControllers.addFriends)

module.exports=router
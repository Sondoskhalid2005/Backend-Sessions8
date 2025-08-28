const express=require("express")
const router= express.Router()
const userControllers=require('../controllers/users.controller')

router.post("/signup", userControllers.signup)
router.put("/:userId", userControllers.addFriends)
router.delete("/:userId", userControllers.deleteUser)


module.exports=router
const express=require('express');
const router=express.Router();
const cors=require('cors')
const {test,registerUser,loginUser, getProfile,shortGoal,longGoal, getEvents,addTask} =require('../controllers/authController')

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:3000'
    })
)

router.get('/',test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)
router.put('/shortTerm/:userId',shortGoal)
router.put('/longTerm/:userId',longGoal)
router.put('/event/:userId',getEvents)
router.put('/addtask/:userId',addTask)
module.exports=router
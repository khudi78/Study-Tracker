
const User=require('../models/user')
const { hashPassword , comparePassword} = require('../helpers/auth');
const jwt=require('jsonwebtoken');

const test=(req,res)=>{
    res.json('test is working')
}

const registerUser= async (req,res)=>{
    try{
       const {name,email,password,username} =req.body;
       if(!name){
        return res.json({
            error:'name is required'
        })
       };

       if(!username){
        return res.json({
            error:'username is required'
        })
       };

       if(!password || password.length<6){
        return res.json({
            error:'Password is required and should be atleast 6 character long'
        })
       };

       const exist= await User.findOne({email});
       if(exist){
        return res.json({
            error:'email is taken already'
        })
       }

       const hashedPassword= await hashPassword(password)
       const user= await User.create({
        name,
        email,
        username,
        password:hashedPassword,
       }) 

       return res.json(user)

    }catch(error){

    }
}

const loginUser= async (req,res)=>{
  try{
    const {email,password} = req.body;

    const user =await User.findOne({email});
    if(!user){
        return res.json({
            error:'no user found'
        })
    }

    const match=await comparePassword(password,user.password)
    // const payload={
    //     email:user.email,
    //     id:user._id,
    //     name:user.name,
    // }

    // if(match){
    //     jwt.sign(payload,process.env.JWT_SECRET,{},(err,token)=>{
    //         if(err) throw err;
    //         res.cookie('token',token).json(user)
    //     })
    //     res.json('password matched')
    // }

    if (match) {
        const token = jwt.sign(
          { email: user.email,tasks:user.tasks,timerTask:user.timerTask,  name: user.name,id: user._id,shorty:user.shorty,long:user.long },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        )
  
        // Save token to user document in database
        user.token = token
        user.password = undefined
        // Set cookie for token and return success response
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        }
        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: `User Login Success`,
        })
      } 
    if(!match){
        res.json({
            error:'passwords do not match'
        })
    }
  }catch(error){
    console.log(error);
  }
}


const getProfile = async (req, res) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.json(null);
        }

        const user = await jwt.verify(token, process.env.JWT_SECRET);

        res.json(user);
    } catch (error) {
        console.error('JWT verification error:', error);
        res.sendStatus(401); // Unauthorized
    }
};

const shortGoal= async (req,res)=>{
  const userId = req.params.userId; // Assuming user ID is in URL path

  // Validate user ID (implement your validation logic here)

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const {subject,topic,duration} = req.body;

    // Validate new parameter value (implement your validation logic here)
    console.log(subject);
    user.shorty = user.shorty || []; // Ensure `shorty` is an array
     user.shorty.push({ subject, topic, duration });//= subject;
    // user.shorty.topic=topic;
    // user.shorty.duration=duration;
    await user.save();

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const longGoal= async (req,res)=>{
  const userId = req.params.userId; // Assuming user ID is in URL path

  // Validate user ID (implement your validation logic here)

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const {subject,topic,duration} = req.body;

    // Validate new parameter value (implement your validation logic here)
    console.log(subject);
    user.long = user.long || []; // Ensure `long` is an array
     user.long.push({ subject, topic, duration });//= subject;
    // user.shorty.topic=topic;
    // user.shorty.duration=duration;
    await user.save();

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const getEvents=async(req,res)=>{
  const userId = req.params.userId; // Assuming user ID is in URL path

  // Validate user ID (implement your validation logic here)
 
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const {name,time,key} = req.body;

    
    user.tasks = user.tasks || []; // Ensure `shorty` is an array
     user.tasks.push({ name,time,key});//= subject;
    // user.shorty.topic=topic;
    // user.shorty.duration=duration;
    await user.save();

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

const getTask=async(req,res)=>{
  const userId = req.params.userId; // Assuming user ID is in URL path
  console.log("userID",userId)
  // Validate user ID (implement your validation logic here)
 
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    console.log("user",user)

    const {input,time} = req.body;
    console.log("input",input)
    console.log("time",time)

    
    user.timerTask = user.timerTask || []; // Ensure `shorty` is an array
     user.timerTask.push({ input,time});//= subject;
    // user.shorty.topic=topic;
    // user.shorty.duration=duration;
    await user.save();

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}




module.exports={
    test,
    registerUser,
    loginUser,
    getProfile,
    shortGoal,
    getTask,
    longGoal,
    getEvents,
    
}
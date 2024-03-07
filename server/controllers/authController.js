
const User=require('../models/user')
const { hashPassword , comparePassword} = require('../helpers/auth');
const jwt=require('jsonwebtoken');

const test=(req,res)=>{
    res.json('test is working')
}

const registerUser= async (req,res)=>{
    try{
       const {name,email,password} =req.body;
       if(!name){
        return res.json({
            error:'name is required'
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
          { email: user.email, id: user._id, name: user.name },
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


module.exports={
    test,
    registerUser,
    loginUser,
    getProfile,
}
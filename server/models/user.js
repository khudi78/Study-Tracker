const mongoose=require('mongoose')
const {Schema} = mongoose

const userSchema= new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    username:String,
    password:String,
    shorty:[{
    subject:String,
    topic:String,
    duration:String
    }],
    long:[{
        subject:String,
        topic:String,
        duration:String
        }],
    
})



const UserModel=mongoose.model('User',userSchema)
//const shortTermModel=mongoose.model('shortTerm',shortTermSchema)

module.exports=UserModel;
//module.exports=shortTermModel;

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true,
        min:3,
        max:50
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    followers:{
        type: [{follower:{type:mongoose.Schema.Types.ObjectId,ref:"User"}}],
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type: String,
        default: ""
    }
    
},{
    timestamps: true
})

module.exports = mongoose.model('User',userSchema)
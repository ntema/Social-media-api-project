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
        type: [{following:{type: mongoose.Schema.Types.ObjectId,ref:'User'}}],
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

const populateUserFollows = function (next) {
    this.populate('followers.follower')
    this.populate('followings.following')
    next()
}
userSchema.pre('findOne', populateUserFollows)
.pre('find', populateUserFollows)
.pre('findOneAndUpdate', populateUserFollows)
module.exports = mongoose.model('User',userSchema)
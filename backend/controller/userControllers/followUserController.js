const User = require('../../models/userModel')

const followUserController = async(req, res) => {
    const user = await User.findOne(req.params.username)
    !user && res.status(400).json('you are not a user on the platform')
    const userFollow = await User.findOne(req.body.username)

    if(user.username !== userFollow.username){
        if(!user.followings.includes(userFollow.username)){
            user.updateOne($push({followings:userFollow.username}))
        }else{
            res.status(400).json('user already followed')
        }
    }else{
        res.status(400).json(`you can't follow self`)
    }
      
}

module.exports = followUserController
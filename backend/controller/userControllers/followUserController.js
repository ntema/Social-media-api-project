const User = require('../../models/userModel')

const followUserController = async(req, res) => {
    const user = await User.findOne({username: req.params.username})
    !user && res.status(400).json('you are not a user on the platform')
    const userToFollow = await User.findOne({username: req.body.username})
    !userToFollow && res.status(400).json('This person is not a user on the platform')

    if(user.username !== userToFollow.username){
        if(!user.followings.includes(userToFollow.username)){
            user.updateOne({$push:{followings:userToFollow.username}})
            res.status(200).json('user followed')
        }else{
            res.status(400).json('user already followed')
        }
    }else{
        res.status(400).json(`you can't follow self`)
    }
      
}

module.exports = followUserController
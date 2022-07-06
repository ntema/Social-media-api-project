const User = require('../../models/userModel')
const verifyToken = require('../../routes/authorization/verifyToken')
const followUserController = async(req, res) => {


    if(req.body.id !== req.params.id){

        try {
            const user = await User.findById(req.params.id)
            !user && res.status(400).json('you are not a user on the platform')
            const userToFollow = await User.findById(req.body.id)
            !userToFollow && res.status(400).json('This person is not a user on the platform')

        if(!user.followers.includes(req.body.id)){
            const myFollow = await User.findOneAndUpdate (
                {_id: req.params.id},
                {$push:{followers:{follower:req.decodedUser}}},{new:true}
                )
            const hisFollowers = await User.findOneAndUpdate(
                {_id:req.body.id},
                {$push:{followings:{following:req.decodedUser}}},{new:true}
                )
            // console.log(myFollowings)
            // console.log(hisFollowers)
            res.status(200).json(myFollow)
        
        }else{
            res.status(400).json('user already followed')
        }
        } catch (err) {
            res.status(500).json(err.message)
        }
    }else{
        res.status(400).json(`you can't follow self`)
    }
      
}

module.exports = followUserController
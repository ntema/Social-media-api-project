const User = require('../../models/userModel')

const getUsercontroller = async(req, res) => {
 const user = await User.findOne({username: req.params.username})
 if(user.username === req.params.username){
    return res.status(200).json(user)
 }
}
module.exports = getUsercontroller
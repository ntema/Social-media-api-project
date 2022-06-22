const User = require('../../models/userModel')

const deleteUsercontroller = async(req, res) => {
 const user = await User.findById(req.params.id)
 if(user){
    await User.findByIdAndDelete(user._id)
    return res.status(200).json('user deleted')
 }else{
   return res.status(200).json('invalid user')
 }
}
module.exports = deleteUsercontroller
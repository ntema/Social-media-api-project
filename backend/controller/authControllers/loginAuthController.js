const User = require('../../models/userModel')
const loginAuthContoller = async (req, res) =>{
    try {
        const {username, password}= req.body
        const user = await User.findOne({username})
        !user &&  res.status(400).json('invalid username and password')
        
        if(user.password !== password){
            res.status(400).json('invalid username and password')
        }

        return res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = loginAuthContoller
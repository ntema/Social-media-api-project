const User = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginAuthContoller = async (req, res) =>{
    try {
        const {username, password}= req.body
        const user = await User.findOne({username})
        !user &&  res.status(400).json('invalid username and password')
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword){
            res.status(400).json('invalid username and password')
        }
        console.log(isPassword)
        console.log(password)
        const generateToken = jwt.sign({id:user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:'30d'
        })
        return res.status(200).json({user, token: generateToken})
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = loginAuthContoller
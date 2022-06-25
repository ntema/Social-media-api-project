const User = require('../../models/userModel')
const bcrypt = require('bcryptjs')
const updateUserController = async(req, res)=> {
    try{
        const user = await User.findById(req.params.id)
        if(user){
            if(req.body.password){
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
               } 
            const updateUser = await User.findByIdAndUpdate(user._id,
                {$set: req.body})
                return res.status(200).json('update successfull')
        }else{
            return res.status(400).json('invalid user')
        }

        
    }catch(err){
       return res.status(500).json(err)
    }
}

module.exports= updateUserController
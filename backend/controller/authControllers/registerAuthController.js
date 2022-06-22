const User = require('../../models/userModel')
const bcrypt = require('bcryptjs')
const registerController =async (req, res )=> {
   try {
    const user = await User.findOne({email:req.body.email})
    if(!user){
      if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password,salt)
      }
      
      const newUser =await  new User( req.body).save()
      return res.status(200).json(newUser)
    }else{
      res.status(400).json('user already exist')
    }
  
  } catch (err) {
      res.status(500).json(err.message)
  }  
}

module.exports = registerController
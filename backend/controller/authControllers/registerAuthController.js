const User = require('../../models/userModel')
const registerController =async (req, res )=> {
   try {
      const user = await new User(req.body)
      await user.save()
      return res.status(200).json(user)
  } catch (err) {
      res.status(500).json(err)
  }
   
}

module.exports = registerController
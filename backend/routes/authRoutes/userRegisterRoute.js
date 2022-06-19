const router = require('express').Router()
const registerAuthController = require('../../controller/authControllers/registerAuthController')

router.post ('/register', registerAuthController )
module.exports = router
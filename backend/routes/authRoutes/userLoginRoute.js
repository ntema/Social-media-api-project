const router = require('express').Router()
const loginAuthContoller = require('../../controller/authControllers/loginAuthController')


router.post('/login', loginAuthContoller)


module.exports = router
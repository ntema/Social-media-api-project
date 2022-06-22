const followUserController = require('../../controller/userControllers/followUserController')
const router = require('express').Router()

router.put('/:username/follow',followUserController)

module.exports = router
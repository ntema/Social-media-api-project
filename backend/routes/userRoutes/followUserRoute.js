const followUserController = require('../../controller/userControllers/followUserController')
const router = require('express').Router()

router.put('/:username',followUserController)

module.exports = router
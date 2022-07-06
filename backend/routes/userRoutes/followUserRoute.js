const followUserController = require('../../controller/userControllers/followUserController')
const router = require('express').Router()

router.put('/:id/follow',followUserController)

module.exports = router
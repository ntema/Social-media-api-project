const router = require('express').Router()
const updateUserController = require('../../controller/userControllers/updateUserController')
const {verifyToken} = require('../authorization/verifyToken')

router.put('/:id/update',verifyToken, updateUserController)


module.exports = router
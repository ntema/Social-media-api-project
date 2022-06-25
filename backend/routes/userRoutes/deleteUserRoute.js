const router = require('express').Router()
const deleteUserController = require('../../controller/userControllers/deleteUserController')
const {verifyToken} = require('../authorization/verifyToken')

router.delete('/:id',verifyToken,deleteUserController)


module.exports = router
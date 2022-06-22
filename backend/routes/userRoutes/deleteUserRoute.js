const router = require('express').Router()
const deleteUserController = require('../../controller/userControllers/deleteUserController')

router.delete('/:id',deleteUserController)


module.exports = router
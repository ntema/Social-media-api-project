const router = require('express').Router()
const updateUserController = require('../../controller/userControllers/updateUserController')

router.put('/:id/update',updateUserController)


module.exports = router
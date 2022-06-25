const getUsercontroller = require('../../controller/userControllers/getUserController')
const express = require('express')
const router = express.Router()
const {verifyToken} = require('../authorization/verifyToken')

router.get('/:username',verifyToken,getUsercontroller)

module.exports = router
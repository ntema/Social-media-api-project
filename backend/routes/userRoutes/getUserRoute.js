const getUsercontroller = require('../../controller/userControllers/getUserController')
const express = require('express')
const router = express.Router()

router.get('/:username',getUsercontroller)

module.exports = router
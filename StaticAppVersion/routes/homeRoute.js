const express = require('express')
const router = express.Router()

const controller = require('../controllers/home')


// const ctrlHome = require('../controllers/home')
// const ctrlOther = require('../controllers/other')

router.get('/', controller.start)
router.get('/home', controller.home)
router.get('/test', controller.test)

// router.get('/about', ctrlOther)

module.exports = router
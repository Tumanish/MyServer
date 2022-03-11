const express = require('express')
const router = express.Router()

const controller = require('../controllers/other')

router.get('/about', controller.about)

router.get('/sudoku', controller.sudoku)

module.exports = router
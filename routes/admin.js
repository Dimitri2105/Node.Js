const express =require('express')
const path =require('path')

const rootDir = require('../util/path')

const routeController = require('../controllers/routeController')

const router = express.Router()

router.get('/add-product',routeController.addItem)
router.post('/add-product',routeController.showItem)


module.exports = router
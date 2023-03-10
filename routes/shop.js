const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const routeController = require('../controllers/routeController')


const router = express.Router()


router.get('/',routeController.displayHome)


module.exports = router
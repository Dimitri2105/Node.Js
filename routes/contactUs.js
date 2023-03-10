const express =require('express')
const path =require('path')

const rootDir = require('../util/path')

const contactUsController = require('../controllers/contactUsController')

const router = express.Router()

router.get('/contactUs',contactUsController.showUserForm)
router.post('/contactUs',contactUsController.showSuccess)



module.exports = router
const express =require('express')
const path =require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/contactUs', (req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
})
router.post('/contactUs',(req,res,next) =>{
    console.log(req.body)
    res.redirect('/')
})


module.exports = router
const router = require('express').Router()
const farmerCtrl = require('../controllers/farmerCtrl')
const authFarmer = require('../middleware/authFarmer')

router.post('/registerFarmer', farmerCtrl.register)

router.post('/loginFarmer', farmerCtrl.login)

router.get('/logout', farmerCtrl.logout)

router.get('/refresh_token', farmerCtrl.refreshToken)

router.get('/infor', authFarmer, farmerCtrl.getFarmer)



module.exports = router
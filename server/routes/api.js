const express = require('express')
const router = express.Router()
const comapany_controllers = require('../controllers/controllers_company');
const items_controllers = require('../controllers/items_controllers');
const auth = require('../controllers/login');
const verifytoken = require('../middleware/verifytoken')



router.post('/api/v2/', [verifytoken.veriftToken,comapany_controllers.addCuestomer]);
router.get('/api/v2/', [verifytoken.veriftToken, comapany_controllers.AllCuestomer]);
router.post('/api/v2/items/', [verifytoken.veriftToken, items_controllers.AddItems]);
router.get('/api/v2/items/',[ verifytoken.veriftToken ,items_controllers.geItems]);
router.get('/api/v2/admin',auth.AdminSignup);
router.post('api/v2/login',auth.signin );



module.exports = router
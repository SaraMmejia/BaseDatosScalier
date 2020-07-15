const router = require('express').Router();
const loginController = require('../controllers/login.controller');

router.route('/signin').post(loginController.signin);

module.exports = router;

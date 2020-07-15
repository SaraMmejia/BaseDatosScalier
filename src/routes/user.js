const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { auth } = require('../utils/middlewares');

router.route('/list').get(userController.list);
router.route('/create').post(userController.create);
router.route('/show/:id').post(userController.show);
router.route('/edit/:id').put(userController.edit);
router.route('/destroy/:id').delete(userController.destroy);

module.exports = router;

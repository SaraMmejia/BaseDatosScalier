const router = require('express').Router();
const postController = require('../controllers/post.controller');
const { auth } = require('../utils/middlewares');

router.route('/list').get(postController.list);
router.route('/create').post(postController.create);
router.route('/show/:id').post(postController.show);
router.route('/edit/:id').put(postController.edit);
router.route('/destroy/:id').delete(postController.destroy);

module.exports = router;

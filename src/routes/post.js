const router = require('express').Router();
const postController = require('../controllers/post.controller');
const { auth } = require('../utils/middlewares');
const { formData } = require('../utils/middlewareBusBoy');

router.route('/list').get(auth, postController.list);
router.route('/listPost').get(auth, postController.listPost);
router.route('/create').post(auth, formData, postController.create);
router.route('/show/:id').get(auth, postController.show);
router.route('/edit/:id').put(auth, formData, postController.edit);
router.route('/destroy/:id').delete(auth, postController.destroy);

module.exports = router;

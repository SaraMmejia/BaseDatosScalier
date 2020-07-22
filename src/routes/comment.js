const router = require('express').Router();
const commentController = require('../controllers/comment.controller');
const { auth } = require('../utils/middlewares');

router.route('/create').post(auth, commentController.create);
router.route('/list').post(auth, commentController.list);

module.exports = router;

const router = require('express').Router();
const likeController = require('../controllers/like.controller');
const { auth } = require('../utils/middlewares');

router.route('/list').get(auth, likeController.list);
router.route('/add').post(auth, likeController.add);
router.route('/remove').post(auth, likeController.remove);

module.exports = router;

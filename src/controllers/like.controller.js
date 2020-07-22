const Like = require('../models/like.model');
const { create } = require('../models/user.model');

module.exports = {
  async list(req, res) {
    try {
      const postId = req.body.postId;
      const like = await Like.find({ postId: postId });
      const numLike = like.length;
      const userLike = await Like.find({ postId: postId, owner: req.user.id });
      let hasVoted = false;
      if (userLike.length >= 1) {
        hasVoted = true;
      }
      res.status(200).json({ numLike, hasVoted });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async add(req, res) {
    try {
      const data = req.body;
      const owner = req.user.id;
      const like = await Like.create({
        owner,
        postId: data.postId,
        ownerName: req.user.userName,
      });

      res.status(200).json(like);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async remove(req, res) {
    try {
      const data = req.body;
      const owner = req.user.id;
      const like = await Like.deleteMany({
        owner,
        postId: data.postId,
      });

      res.status(200).json(like);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

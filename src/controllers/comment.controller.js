const Comment = require('../models/comment.model');
const { create } = require('../models/user.model');

module.exports = {
  async list(req, res) {
    try {
      const postId = req.body.postId;
      const comment = await Comment.find({ postId: postId });
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const owner = req.user.id;
      const comment = await Comment.create({
        text: req.body.text,
        owner,
        postId: req.body.postId, // por que data.postId?
        ownerName: req.user.userName,
      });

      res.status(200).json(comment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

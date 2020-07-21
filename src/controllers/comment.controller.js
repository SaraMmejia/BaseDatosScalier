const Comment = require('../models/comment.model');
const { create } = require('../models/user.model');

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      console.log('data', data);
      const comment = await Comment.create({
        write: data.write,
      });

      res.status(200).json(comment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

const Post = require('../models/post.model');
const { create } = require('../models/user.model');

//CRUD

module.exports = {
  async list(req, res) {
    try {
      const post = await Post.find();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async listPost(req, res) {
    try {
      const post = await Post.find({ owner: req.user.id });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const data = req.body;
      const post = await Post.create({
        image: data.file.url,
        title: data.title,
        tags: data.tags,
        description: data.description,
        owner: req.user.id,
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      console.log('Data es igual a:', req.body);
      const options = {
        new: true,
        useFindAndModify: false, // Este es el Id del User para poder identidicar quien monto los Posts
      };

      const test = {
        title: data.title,
        tags: data.tags,
        description: data.description,
        owner: req.user.id,
      };
      if (data.file.url) {
        test.image = data.file.url;
      }
      console.log(test);

      const post = await Post.findByIdAndUpdate(id, test, options);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

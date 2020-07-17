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

  async create(req, res) {
    try {
      const data = req.body;
      const post = await Post.create({
        image: data.image,
        title: data.title,
        tags: data.tags,
        description: data.description,
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // async create(req, res) {
  //   try {
  //     const { file, ...data } = req.body;
  //     const post = await Post.create({ ...data, image: file.secure_url });
  //     res.status(200).json(product);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // },
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
      console.log('Edit');
      const { id } = req.params;
      console.log('id', id);
      const data = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };
      const post = await Post.findByIdAndUpdate(id, data, options);
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

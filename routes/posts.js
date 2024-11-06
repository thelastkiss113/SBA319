import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('userId');
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.patch('/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

export default router;

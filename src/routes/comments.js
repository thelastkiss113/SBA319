import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await Comment.find().populate('postId userId');
  res.json(comments);
});

router.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

router.patch('/:id', async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(comment);
});

router.delete('/:id', async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Comment deleted' });
});

export default router;

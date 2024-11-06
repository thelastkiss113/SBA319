import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// GET route to fetch all comments and populate related postId and userId
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('postId')  // Populate the related post document
      .populate('userId')  // Populate the related user document (if userId is part of the schema)
      .populate('movie_id'); // Populate the related movie document (if movie_id exists in the schema)

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to create a new comment
router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH route to update an existing comment by its ID
router.patch('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE route to remove a comment by its ID
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

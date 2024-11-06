import mongoose from 'mongoose';

// Define the comment schema
const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie', // Reference to the Movie collection
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default to current time
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Reference to the Post collection
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User collection
  },
});

// Create and export the Comment model
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

postSchema.index({ title: 1 });

const Post = mongoose.model('Post', postSchema);
export default Post;

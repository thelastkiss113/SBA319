import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

userSchema.index({ username: 1 });

const User = mongoose.model('User', userSchema);
export default User;

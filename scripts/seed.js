//scripts/seed.js

import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../src/models/User.js';
import Post from '../src/models/Post.js';
import Comment from '../src/models/Comment.js';

await mongoose.connect(process.env.ATLAS_URI);

const users = [
  { email: 'john@doe.com', password: '123456', username: 'johndoe123', name: 'John Doe' },
  { email: 'boba@fett.com', password: 'jetpackdude', username: 'bobafett123', name: 'Boba Fett' },
  { email: 'darth@vader.com', password: 'iamyourfather', username: 'darthlord123', name: 'Darth Vader' },
];

await User.deleteMany({});
await Post.deleteMany({});
await Comment.deleteMany({});

const createdUsers = await User.create(users);

const posts = [
  { title: 'Star Wars', content: 'its really cool', userId: createdUsers[2]._id },
  { title: 'MongoDB', content: 'its a database', userId: createdUsers[0]._id },
  { title: 'Dogs are Cool', content: 'Do i really need to explain??', userId: createdUsers[1]._id },
];

const createdPosts = await Post.create(posts);

const comments = [
  { content: 'Love this!', postId: createdPosts[0]._id, userId: createdUsers[1]._id },
  { content: 'Totally agree', postId: createdPosts[1]._id, userId: createdUsers[2]._id },
  { content: 'Not bad at all', postId: createdPosts[2]._id, userId: createdUsers[0]._id },
];

await Comment.create(comments);

await mongoose.connection.close();

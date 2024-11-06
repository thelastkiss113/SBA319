//scripts/seed.js

import 'dotenv/config'
// Require connection file to connect
import mongoose from 'mongoose';

await mongoose.connect(process.env.ATLAS_URI)
// Require Models for delete and create operations
import Post from '../models/Post.js';
import User from '../models/User.js';

try {
  const users = [
    {
      email: 'john@doe.com',
      password: '123456',
      username: 'johndoe123',
      name: "John Doe"
    },
    {
      email: 'boba@fett.com',
      password: 'jetpackdude',
      username: 'bobafett123',
      name: "Boba Fett"
    },
    {
      email: 'darth@vader.com',
      password: 'iamyourfather',
      username: 'darthlord123',
      name: "Darth Vader"
    },
  ];


  await Post.deleteMany({});
  await User.deleteMany({});

  const createdUsers = await User.create(users);

  console.log('Users: ', createdUsers);


  const posts = [
    {
      title: 'Star Wars',
      content: 'its really cool',
      userId: createdUsers[2]._id
    },
    {
      title: 'MongoDB',
      content: 'its a database',
      userId: createdUsers[0]._id
    },
    {
      title: 'Dogs are Cool',
      content: 'Do i really need to explain??',
      userId: createdUsers[1]._id
    },
  ];

  const createdPosts = await Post.create(posts);

  console.log('Posts: ', createdPosts);

} catch (err) {
  console.log(err);
} finally {
  await mongoose.connection.close();
}
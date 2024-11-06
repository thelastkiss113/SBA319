import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './src/routes/users.js';
import postRoutes from './src/routes/posts.js';
import commentRoutes from './src/routes/comments.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

mongoose.connect(process.env.ATLAS_URI);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/connectDB';
import { errorHandler } from './middleware/errorHandler';
import blogPostRoutes from './routes/blogPostRoutes.ts';
import commentsRoutes from './routes/commentRoutes.ts';
import cors from 'cors';
import userRoutes from './routes/userRoutes.ts';

const app = express();
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT;

connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/blogs/', blogPostRoutes);
app.use('/comments/', commentsRoutes);
app.use('/login/', userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

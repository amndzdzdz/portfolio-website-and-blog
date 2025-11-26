import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/connectDB';
import { errorHandler } from './middleware/errorHandler';
import blogPostRoutes from './routes/blogPostRoutes.ts';

const app = express();
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use('/blogs/', blogPostRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/connectDB';
import app from './app';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.SERVER_PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});

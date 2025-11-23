import mongoose from 'mongoose';

const connect = mongoose.connection;
mongoose.set('strictQuery', true);

export const connectDB = async () => {
  const url = process.env.MONGO_URL!;

  connect.on('connected', async () => {
    console.log('Database connection established!');
  });

  connect.on('reconnected', async () => {
    console.log('Database connection reestablished!');
  });

  connect.on('disconnected', () => {
    console.log('Database connection disconnected!');
    console.log('Trying to reconnected to database...');

    setTimeout(() => {
      mongoose.connect(url, {
        serverSelectionTimeoutMS: 3000,
        socketTimeoutMS: 3000,
      });
    }, 3000);
  });

  connect.on('close', () => {
    console.log('Database connection closed!');
  });

  connect.on('error', (error: Error) => {
    console.log('Databse connection error: ' + error);
  });

  await mongoose.connect(url).catch((error: Error) => {
    console.log(error);
  });
};

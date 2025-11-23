import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A title is required!'],
    },
    caption: {
      type: String,
      required: [true, 'A caption is required!'],
    },
    category: {
      type: String,
      required: [true, 'A category is required!'],
    },
    date: {
      type: Date,
      required: [true, 'A date is required!'],
    },
    timeToRead: {
      type: Number,
      required: [true, 'A time to read is required!'],
    },
    image: {
      type: String,
      required: [true, 'An image is required!'],
    },
    content: {
      type: String,
      required: [true, 'The content is required!'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('blogPost', blogPostSchema);

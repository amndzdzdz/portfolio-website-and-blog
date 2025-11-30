import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    blogPostId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'The blog post id is required!'],
      ref: 'blogPost',
    },
    name: {
      type: String,
      required: [true, 'The name is required!'],
    },
    date: {
      type: Date,
      required: [true, 'The date is required'],
    },
    message: {
      type: String,
      required: [true, 'The message is required!'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('comment', commentSchema);

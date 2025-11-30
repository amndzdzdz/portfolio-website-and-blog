import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Comment from '../models/commentModel';
import BlogPost from '../models/blogPostModel';

//@desc Gets all comments for a given blogPost
//@route GET /comments/:blogPostId
//@access public
export const getComments = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error('The blogpost id is missing!');
  }
  const blogPost = BlogPost.find({ _id: id });
  if (!blogPost) {
    res.status(404);
    throw new Error('Blog post doesnt exist');
  }
  const comments = await Comment.find({ blogPostId: id });
  res.status(200).json({ comments: comments });
});

//@desc Creates a comment
//@route POST /comments/:blogPostId
//@access public
export const createComment = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, message, date } = req.body;

    if (!name || !date || !message) {
      res.status(400);
      throw new Error('All fields are required!');
    }
    if (!id) {
      res.status(400);
      throw new Error('The blogpost id is missing!');
    }

    const blogPost = BlogPost.find({ _id: id });
    if (!blogPost) {
      res.status(404);
      throw new Error('Blog post doesnt exist');
    }
    const comment = await Comment.create({
      blogPostId: id,
      name,
      date,
      message,
    });
    res.status(200).json({ comment: comment });
  },
);

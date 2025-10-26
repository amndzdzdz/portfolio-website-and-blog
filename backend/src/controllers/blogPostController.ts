import { Request, Response } from "express";
import asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogPostModel");

//@desc Create one blog post
//@route POST /blogs/
//@access private
const createBlogPost = asyncHandler(async (req: Request, res: Response) => {
  const { title, caption, category, date, timeToRead, image, content } =
    req.body;
  if (
    !title ||
    !caption ||
    !category ||
    !date ||
    !timeToRead ||
    !image ||
    !content
  ) {
    res.status(400);
    throw new Error("All fields to createa  blog-post are required!");
  }
  const createdBlogPost = await BlogPost.create({
    title: title,
    caption: caption,
    category: category,
    date: date,
    timeToRead: timeToRead,
    image: image,
    content: content,
  });
  if (!createBlogPost) {
    res.status(400);
    throw new Error("An error occured while creating a blog-post");
  }
  res.status(200).json({ blogPost: createdBlogPost });
});

//@desc Get one blog post
//@route GET /blogs/:id
//@access public
const getBlogPostById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error("An id must be given");
  }
  const blogPost = await BlogPost.findOne({
    _id: id,
  });
  if (!blogPost) {
    res.status(404);
    throw new Error("The blog-post doesnt exist");
  }
  res.status(200).json({ blogPost: blogPost });
});

//@desc Update one blog post
//@route PUT /blogs/
//@access public
const updateBlogPost = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ message: "Updated one blog post" });
});

//@desc Get all blog post
//@route GET /blogs/
//@access public
const getBlogPosts = asyncHandler(async (_req: Request, res: Response) => {
  res.status(200).json({ message: "Get all blogs" });
});

//@desc Delete a blog post
//@route DELETE /blogs/:id
//@access public
const deleteBlogPost = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ message: "Delete one blog post" });
});

module.exports = {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPosts,
  deleteBlogPost,
};

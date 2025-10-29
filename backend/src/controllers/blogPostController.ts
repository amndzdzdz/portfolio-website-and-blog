import { Request, Response } from "express";
import asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogPostModel");

//@desc Create one blog post
//@route POST /blogs/
//@access public
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
//@access private
const updateBlogPost = asyncHandler(async (req: Request, res: Response) => {
  const { id, title, caption, category, date, timeToRead, image, content } =
    req.body;
  if (
    !id ||
    !title ||
    !caption ||
    !category ||
    !date ||
    !timeToRead ||
    !image ||
    !content
  ) {
    res.status(400);
    throw new Error("All fields to create a blog-post are required!");
  }
  const updatedBlogPost = await BlogPost.findOneAndUpdate(
    { _id: id },
    {
      title: title,
      caption: caption,
      category: category,
      date: date,
      timeToRead: timeToRead,
      image: image,
      content: content,
    }
  );
  if (!updatedBlogPost) {
    res.status(404);
    throw new Error("Couldn't find the blog-post");
  }
  res.status(200).json({ blogPost: updatedBlogPost });
});

//@desc Delete a blog post
//@route DELETE /blogs/:id
//@access public
const deleteBlogPost = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(404);
    throw new Error("The blog post doesn't exist");
  }
  await BlogPost.findOneAndDelete({ _id: id });
  const blogPost = await BlogPost.findOne({ _id: id });
  if (blogPost) {
    res.status(400);
    throw new Error("An error occured deleting the blog-post");
  }
  res.status(200).json({ message: "Successfully deleted blog-post!" });
});

//@desc Gets the preview information of past n blog-posts
//@route GET /blogs/
//@access public
const getBlogPostPreviews = asyncHandler(
  async (req: Request, res: Response) => {
    let furthestDate;
    const limit = req.query.limit;
    const after = req.query.after;
    if (!limit || !after) {
      res.status(400);
      throw new Error("Both query params limit and after required!");
    }
    const blogPosts = await BlogPost.find({ date: { $gt: after } })
      .limit(limit)
      .select("_id title caption category date image")
      .exec();
    if (blogPosts.length === 0) {
      furthestDate = after;
    } else {
      furthestDate = blogPosts[blogPosts.length - 1].date;
    }
    res.status(200).json({
      blogPosts: blogPosts,
      furthestDate: furthestDate,
    });
  }
);

//@desc Get all titles and ids
//@route GET /blogs/titles/
//@access public
const getBlogPostTitles = asyncHandler(async (req: Request, res: Response) => {
  const blogPostTitles = await BlogPost.find().select("_id title").exec();
  res.status(200).json({ blogPostTitles: blogPostTitles });
});

module.exports = {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPostPreviews,
  getBlogPostTitles,
  deleteBlogPost,
};

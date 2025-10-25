import asyncHandler = require("express-async-handler");

//@desc Create one blog post
//@route POST /blogs/
//@access public
const createBlogPost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Created one blog post" });
});

//@desc Get one blog post
//@route GET /blogs/:id
//@access public
const getBlogPostById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get blog with id: ${id}` });
});

//@desc Update one blog post
//@route PUT /blogs/
//@access public
const updateBlogPost = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Updated one blog post" });
});

//@desc Get all blog post
//@route GET /blogs/
//@access public
const getBlogPosts = asyncHandler(async (_req, res) => {
  res.status(200).json({ message: "Get all blogs" });
});

//@desc Delete a blog post
//@route DELETE /blogs/:id
//@access public
const deleteBlogPost = asyncHandler(async (req, res) => {
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

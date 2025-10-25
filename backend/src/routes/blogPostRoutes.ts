import express = require("express");
const {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPosts,
  deleteBlogPost,
} = require("../controllers/blogPostController");

const router = express.Router();

router.get("/:id", getBlogPostById).delete("/:id", deleteBlogPost);

router
  .get("/", getBlogPosts)
  .post("/", createBlogPost)
  .put("/", updateBlogPost);

module.exports = router;

import express = require("express");

const {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPostPreviews,
  deleteBlogPost,
} = require("../controllers/blogPostController");

const router = express.Router();
router.get("/:id", getBlogPostById).delete("/:id", deleteBlogPost);
router
  .post("/", createBlogPost)
  .put("/", updateBlogPost)
  .get("/", getBlogPostPreviews);

module.exports = router;

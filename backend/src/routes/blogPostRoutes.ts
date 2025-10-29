import express = require("express");

const {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPostPreviews,
  getBlogPostTitles,
  deleteBlogPost,
} = require("../controllers/blogPostController");

const router = express.Router();

router
  .post("/", createBlogPost)
  .put("/", updateBlogPost)
  .get("/", getBlogPostPreviews);
router.get("/titles", getBlogPostTitles);
router.get("/:id", getBlogPostById).delete("/:id", deleteBlogPost);

module.exports = router;

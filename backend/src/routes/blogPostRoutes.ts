import express from 'express';

import {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPostPreviews,
  getBlogPostTitles,
  deleteBlogPost,
} from '../controllers/blogPostController';

const router = express.Router();

router
  .post('/', createBlogPost)
  .put('/', updateBlogPost)
  .get('/', getBlogPostPreviews);
router.get('/titles', getBlogPostTitles);
router.get('/:id', getBlogPostById).delete('/:id', deleteBlogPost);

export default router;

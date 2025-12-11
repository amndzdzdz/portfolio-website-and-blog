import express from 'express';

import {
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  getBlogPostPreviews,
  getBlogPostTitles,
  deleteBlogPost,
} from '../controllers/blogPostController';
import { validateTokenHandler } from '../middleware/validateTokenHandler';

const router = express.Router();

router
  .post('/', validateTokenHandler, createBlogPost)
  .put('/', validateTokenHandler, updateBlogPost)
  .get('/', getBlogPostPreviews);
router.get('/titles', validateTokenHandler, getBlogPostTitles);
router.get('/:id', getBlogPostById).delete('/:id', deleteBlogPost);

export default router;

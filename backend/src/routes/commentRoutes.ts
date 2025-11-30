import express from 'express';
import { createComment, getComments } from '../controllers/commentController';
const router = express.Router();

router.post('/:id', createComment);
router.get('/:id', getComments);

export default router;

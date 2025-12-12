import express from 'express';
import { checkAuth, login } from '../controllers/userController';
import { validateTokenHandler } from '../middleware/validateTokenHandler';
const router = express.Router();

router.post('/', login).get('/', validateTokenHandler, checkAuth);

export default router;

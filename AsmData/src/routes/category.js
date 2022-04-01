import { Router } from 'express';
import { create, get, list, remove, update, read } from '../controllers/category';
// const { checkAuth } = require('../middleware/checkAuth');
import { checkAuth } from '../middleware/checkAuth';

const router = Router();


router.get("/categories", checkAuth, list);
router.post('/category', checkAuth, create);
router.get('/category/:slug', checkAuth, read);

export default router;
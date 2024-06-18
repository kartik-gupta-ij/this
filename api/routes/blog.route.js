import express from 'express';
import { createBlog, getAllBlog } from '../controllers/blog.controller';

const router = express.Router();
 
router.get('/blog', getAllBlog);
router.post('/blog', createBlog);

export default router;

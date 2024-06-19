import express from 'express';
import { createEvent, getAllEvent } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/event', getAllEvent);
router.post('/event', createEvent);

export default router;

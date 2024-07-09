import express from 'express';
import { createSadhanaForm, getdatainExcel} from '../controllers/sadhanaform.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();


router.post("/sadhana", verifyToken, createSadhanaForm);
router.get("/getdata/:userId",  getdatainExcel);
export default router;
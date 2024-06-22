import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  getAllUser,
  getRecentBirthdays,
  forgotPassword,
  verifyOTP,
  resetPassword,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { chatroom } from '../controllers/chat.controllers.js';
import { sadhanafill } from '../controllers/sadhana.controllers.js';
const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/api/chatroom/:id',verifyToken,chatroom);
router.post('/api/sadhana/:id',verifyToken,sadhanafill);
router.get("/getuser", getAllUser);
router.put("/update/:id", verifyToken, updateUser );
router.get("/api/getbirthday", verifyToken, getRecentBirthdays);
router.post("/forgetpassword", forgotPassword);
router.post("/verifyotp", verifyOTP);
router.post("/resetpassword", resetPassword);

export default router;

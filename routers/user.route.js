import express from 'express';

import { getAllUser, register, userDelete } from '../controller/user.controller.js';

const router = express.Router();

router.post("/register", register)
router.get("/getAllUser", getAllUser)
router.delete("/userDelete", userDelete)

export default router;
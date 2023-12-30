import express from "express";
import { GenerateCode, SignIn, SignUp } from "../controllers/User.js";

const router = express.Router();

router.post("/signin", SignIn);
router.post("/signup", SignUp);
router.post("/generateCode", GenerateCode);

export default router;

import express from "express";
import { registerUser } from "../controller/registerUser.js";
import { getUser } from "../controller/loginUser.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/", getUser);

export default router;

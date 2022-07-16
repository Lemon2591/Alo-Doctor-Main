import express from "express";
import { getUser, createUser, updateUser } from "../controller/post.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.put("/", updateUser);

export default router;

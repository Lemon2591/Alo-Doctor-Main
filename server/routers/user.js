import express from "express";
import { registerPatient, registerDoctor } from "../controller/registerUser.js";
import { getUserPatient, getUserDoctor } from "../controller/loginUser.js";

const router = express.Router();

router.post("/register/patient", registerPatient);
router.post("/register/doctor", registerDoctor);

router.get("/data/patient", getUserPatient);
router.get("/data/doctor", getUserDoctor);

export default router;

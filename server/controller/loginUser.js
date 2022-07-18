import { UserPatient } from "../models/accountPatient.js";
import { UserDoctor } from "../models/accountDoctor.js";

export const getUserPatient = async (req, res) => {
  try {
    const createUser = await UserPatient.find();
    console.log(createUser);
    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getUserDoctor = async (req, res) => {
  try {
    const createUser = await UserDoctor.find();
    console.log(createUser);
    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

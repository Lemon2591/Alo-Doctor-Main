import { UserPatient } from "../models/accountPatient.js";
import { UserDoctor } from "../models/accountDoctor.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const registerPatient = async (req, res) => {
  const { userName, passWord, email, confirmPassWord, role } = req.body;

  if (!userName || !passWord || !email || !confirmPassWord || !role)
    return res
      .status(400)
      .json({ message: "userName and/or passWord is blank !", success: false });
  try {
    const checkUserName = await UserPatient.findOne({
      userName: userName,
    });

    if (checkUserName)
      return res
        .status(400)
        .json({ message: "username already exists !", success: false });
    const hashPassWord = await argon2.hash(passWord, confirmPassWord);
    const hashedPassWord = new UserPatient({
      userName: userName,
      email: email,
      passWord: hashPassWord,
      confirmPassWord: hashPassWord,
      role: role,
    });
    await hashedPassWord.save();

    const accessToken = jwt.sign(
      { userID: hashedPassWord._id },
      "sxv3wasdcxv346tsdvfhtjhgasf323cxcbvwau879ugvcxawfcsdfwecs"
    );
    res
      .status(200)
      .json({ message: "Sign Up Success !", success: true, accessToken });
  } catch (error) {
    res.status(500).json({ message: "error", error: error });
  }
};

export const registerDoctor = async (req, res) => {
  const { userName, passWord, email, confirmPassWord, role } = req.body;

  if (!userName || !passWord || !email || !confirmPassWord || !role)
    return res
      .status(400)
      .json({ success: false, message: "userName and/or passWord is blank !" });
  try {
    const checkUserName = await UserDoctor.findOne({
      userName: userName,
    });
    console.log(checkUserName);
    if (checkUserName)
      return res
        .status(400)
        .json({ success: false, message: "username already exists !" });

    const hashPassWord = await argon2.hash(passWord, confirmPassWord);
    const hashedPassWord = new UserDoctor({
      userName: userName,
      email: email,
      passWord: hashPassWord,
      confirmPassWord: hashPassWord,
      role: role,
    });

    console.log(hashedPassWord);

    await hashedPassWord.save();
    const accessToken = jwt.sign(
      { userID: hashedPassWord._id },
      "sdavvre63gbvcqwfdbdfv1vgtg8fds5"
    );
    console.log(accessToken);
    res
      .status(200)
      .json({ success: true, message: "Sign Up Success !", accessToken });
  } catch (error) {
    res.status(500).json({ message: "error", error: error });
  }
};

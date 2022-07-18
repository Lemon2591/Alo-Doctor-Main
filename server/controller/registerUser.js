import { User } from "../models/user.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord)
    return res
      .status(400)
      .json({ message: "userName and/or passWord is blank !", success: false });
  try {
    const checkUserName = await User.findOne({
      userName: userName,
    });

    if (checkUserName)
      return res
        .status(400)
        .json({ message: "username already exists !", success: false });
    const hashPassWord = await argon2.hash(passWord);
    const hashedPassWord = new User({
      userName: userName,
      passWord: hashPassWord,
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

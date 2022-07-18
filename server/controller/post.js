import { User } from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const createUser = await User.find();

    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req, res) => {
  try {
    const newGetUserName = req.body.userName;
    const newGetPassWord = req.body.passWord;

    console.log(newGetUserName, newGetPassWord);

    const newUser = new User({
      userName: newGetUserName,
      passWord: newGetPassWord,
    });
    await newUser.save();
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "error", error: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateGetUser = req.body;

    const updateUser = await new User.findByIdAndUpdate(
      { _id: updateGetUser._id },
      updateGetUser,
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {}
};

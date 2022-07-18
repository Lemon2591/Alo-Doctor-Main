import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const createUser = await User.find();

    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

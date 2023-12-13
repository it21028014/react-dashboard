import fs from "fs";

console.log(fs.readdirSync("../models"));
import User from "../models/User";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

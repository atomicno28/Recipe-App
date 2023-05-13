import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  //if user is already registered.
  if (user) res.json({ message: "User already present" });

  // implementing bcyrpt.
  const hashpassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashpassword });

  await newUser.save();

  res.json({ message: "User Registered Succesfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  // if user hasn't registered!
  if (!user) return res.json({ message: "User hasn't registered" });

  // it'll return true/false.
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.json({ message: "Username or Password is incorrect!" });

  // it is used for validating the genuine authentication
  const token = await jwt.sign({ userid: user._id }, "secret");

  res.json({ token, userID: user._id });
});

export { router as userRouter };

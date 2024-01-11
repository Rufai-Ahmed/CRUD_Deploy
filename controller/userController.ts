import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const ePassword = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await userModel.create({
      name,
      email,
      password: ePassword,
      token,
    });

    return res.status(201).json({
      msg: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error encountered",
    });
  }
};

export const viewUsers = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(201).json({
      msg: "Viewing all users",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error encountered",
    });
  }
};

export const viewOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(201).json({
      msg: "One user found",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error encountered",
    });
  }
};

export const upgradeUserPlan = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    if (user) {
      const upgradedUser = await userModel.findByIdAndUpdate(
        user._id,
        {
          plan: "premium",
        },
        { new: true }
      );

      return res.status(201).json({
        msg: "User upgraded successfully",
        data: upgradedUser,
      });
    } else {
      return res.status(404).json({
        msg: "Error encountered",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error encountered",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    if (user) {
      const upgradedUser = await userModel.findByIdAndDelete(user._id);

      return res.status(201).json({
        msg: "User deleted successfully",
        data: upgradedUser,
      });
    } else {
      return res.status(404).json({
        msg: "Error encountered",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error encountered",
    });
  }
};

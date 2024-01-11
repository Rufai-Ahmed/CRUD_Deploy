import { Schema, model } from "mongoose";
import { iUserData } from "../interfaces/interfaces";

const userModel = new Schema<iUserData>(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    plan: { type: String, default: "free" },
    token: { type: String },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);

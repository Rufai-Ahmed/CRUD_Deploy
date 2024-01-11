import { Document } from "mongoose";

export interface iUser {
  name: string;
  plan: string;
  password: string;
  token: string;
  email: string;
}

export interface iUserData extends Document, iUser {}

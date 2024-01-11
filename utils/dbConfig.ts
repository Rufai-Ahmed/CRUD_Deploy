import { config } from "dotenv";
import { connect } from "mongoose";
config();

const URL: string = process.env.DATABASE_URL!;

export const dbConfig = async () => {
  try {
    return await connect(URL)
      .then(() => {
        console.log("DB Connected");
      })
      .catch(() => {
        console.log("Error connecting to DB");
      });
  } catch (error) {
    console.log(error);
  }
};

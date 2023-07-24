import bcrypt from "bcryptjs/dist/bcrypt.js";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestapms: true }
);

const User = mongoose.model("User", userSchema);

export default User;

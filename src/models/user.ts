import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      unique: [true, "Username already exists"],
      required: [true, "Username is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    profile: {
      type: String,
      default: "./user.jpg",
    },
    bio: {
      type: String,
      default: "Writing a blog",
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;

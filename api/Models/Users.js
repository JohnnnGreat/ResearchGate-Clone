import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  vCode: {
    type: String,
  },

  resources: {
    type: Schema.Types.ObjectId,
    ref: "Resource",
  },

  profileImage: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);

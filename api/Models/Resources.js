import mongoose, { Schema } from "mongoose";

const resourceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  resourceUrl: {
    type: String,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Author",
  },
});

export default Resource = mongoose.model("Resource", resourceSchema);

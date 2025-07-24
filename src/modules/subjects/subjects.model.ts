import mongoose, { Schema } from "mongoose";

const subjectsModel = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Subjects", subjectsModel);

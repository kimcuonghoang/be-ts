import mongoose, { Schema } from "mongoose";

const assignmentsModel = new Schema(
  {
    class_id: { type: Schema.Types.ObjectId, ref: "Classes", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Assignments", assignmentsModel);

import mongoose, { Schema } from "mongoose";

const enrollmentsModel = new Schema(
  {
    student_id: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    class_id: { type: Schema.Types.ObjectId, ref: "Classes", required: true },
    enrolled_at: { type: Date, default: Date.now() },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Enrollments", enrollmentsModel);

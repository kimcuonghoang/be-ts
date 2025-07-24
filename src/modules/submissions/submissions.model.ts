import mongoose, { Schema } from "mongoose";

const submissionsModel = new Schema(
  {
    assignment_id: {
      type: Schema.Types.ObjectId,
      ref: "Assignments",
      required: true,
    },
    student_id: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    submission_date: { type: Date, default: Date.now() },
    file_url: { type: String, required: true },
    grade: { type: Number, default: null },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Submissions", submissionsModel);

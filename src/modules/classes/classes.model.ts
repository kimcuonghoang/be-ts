import mongoose, { Schema } from "mongoose";

const classesModel = new Schema(
  {
    name: { type: String, required: true },
    subject_id: {
      type: Schema.Types.ObjectId,
      ref: "Subjects",
      required: true,
    },
    teacher_id: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Classes", classesModel);

import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  thumbnail?: string;
  price: number;
  instructor: mongoose.Types.ObjectId;
  youtubeVideos: Array<{
    title: string;
    videoId: string;
  }>;
  liveClass: {
    isLive: boolean;
    meetLink?: string;
    scheduleTime?: Date;
  };
  students: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String },
    price: { type: Number, default: 0 },
    instructor: { type: Schema.Types.ObjectId, ref: "User", required: true },

    youtubeVideos: [
      {
        title: { type: String, required: true },
        videoId: { type: String, required: true }, // e.g., YT ID "dQw4w9WgXcQ"
      },
    ],

    liveClass: {
      isLive: { type: Boolean, default: false },
      meetLink: { type: String },
      scheduleTime: { type: Date },
    },

    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Course: Model<ICourse> =
  mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);

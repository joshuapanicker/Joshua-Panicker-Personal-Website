import mongoose, { Schema } from "mongoose";

// TypeScript type for Project
export type Project = {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  tech_stack: string[];
  link?: string; // optional link to project
};

// Mongoose schema
const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  tech_stack: { type: [String], required: true },
  link: { type: String, required: false },
});

// Defining the collection and model
const Project =
  mongoose.models["projects"] ||
  mongoose.model<Project>("projects", projectSchema);

export default Project;


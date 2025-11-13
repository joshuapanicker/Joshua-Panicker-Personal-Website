import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const projects = await Project.find().orFail();
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json("Projects not found.", { status: 404 });
  }
}


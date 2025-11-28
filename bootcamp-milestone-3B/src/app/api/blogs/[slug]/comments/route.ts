import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import type { IComment } from "@/database/blogSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    const newComment: IComment = {
      user,
      comment,
      time: new Date(),
    };

    const blog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).orFail();

    return NextResponse.json(blog.comments);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}


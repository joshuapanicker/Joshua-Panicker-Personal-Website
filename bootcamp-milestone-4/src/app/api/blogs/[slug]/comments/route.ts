import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  const { slug } = await params;

  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment || typeof user !== "string" || typeof comment !== "string") {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_COMMENT_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Comment email config missing:", {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      return NextResponse.json(
        { error: "Comment notifications are not configured" },
        { status: 500 }
      );
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: user.trim(),
        message: comment.trim(),
        blog_slug: slug,
      },
      {
        publicKey,
        privateKey: process.env.EMAILJS_PRIVATE_KEY ?? undefined,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Comment submitted for moderation. It will not appear on the blog until approved.",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const status = err && typeof err === "object" && "status" in err ? (err as { status: number }).status : 403;
    console.error("Comment email error:", err);
    // In development, surface EmailJS error so you can fix config (e.g. enable API in EmailJS Security, add private key)
    const safeMessage =
      process.env.NODE_ENV === "development"
        ? `Failed to submit comment: ${message}`
        : "Failed to submit comment for moderation";
    return NextResponse.json(
      { error: safeMessage },
      { status: 500 }
    );
  }
}

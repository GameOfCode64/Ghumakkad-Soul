import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { fullName, email, message, trekId } = data;

  if (!fullName || !email || !message || !trekId) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const newComment = await client.create({
      _type: "comment",
      fullName,
      email,
      message,
      trekCard: {
        _type: "reference",
        _ref: trekId,
      },
    });
    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `An error occurred while adding the comment ${error}}` },
      { status: 500 }
    );
  }
}

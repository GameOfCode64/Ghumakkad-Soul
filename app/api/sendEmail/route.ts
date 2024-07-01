import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, email, phoneNumber, trekName, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contact Form Submission from ${fullName}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Trek Name: ${trekName}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending email", details: error },
      { status: 500 }
    );
  }
}

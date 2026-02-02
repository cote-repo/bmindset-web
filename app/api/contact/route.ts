import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: (process.env.SMTP_SECURE ?? "false") === "true",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      ...(process.env.SMTP_TLS_REJECT_UNAUTHORIZED
        ? {
            tls: {
              rejectUnauthorized:
                process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
            },
          }
        : {}),
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_TO_EMAIL ?? "info@bmindsets.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0369a1; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0369a1;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #64748b; font-size: 12px;">
            This email was sent from the BMINDSET TECHNOLOGY website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

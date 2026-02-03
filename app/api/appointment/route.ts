import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, topic, date, time } = await request.json();

    if (!name || !email || !phone || !topic || !date || !time) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const appointmentDate = new Date(date);
    const formattedDate = appointmentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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

    // Email to the company
    const companyMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.APPOINTMENT_TO_EMAIL ?? "info@bmindsets.com",
      replyTo: email,
      subject: `New Appointment Request - ${name} on ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0369a1; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">
            New Appointment Booking
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">Appointment Details</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${time}</p>
            
            <h3 style="color: #0369a1;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            
            <h3 style="color: #0369a1;">Discussion Topic</h3>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0369a1;">
              ${topic.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #64748b; font-size: 12px;">
            This appointment was booked from the BMINDSET TECHNOLOGY website.
          </p>
        </div>
      `,
    };

    // Confirmation email to the customer
    const customerMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: `Appointment Confirmed - BMINDSET TECHNOLOGY`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #0369a1; margin: 0;">BMINDSET TECHNOLOGY</h1>
            <p style="color: #64748b; margin: 5px 0;">GIS & Geospatial Solutions</p>
          </div>
          
          <h2 style="color: #0369a1; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">
            Your Appointment is Confirmed!
          </h2>
          
          <p>Dear ${name},</p>
          <p>Thank you for scheduling an appointment with BMINDSET TECHNOLOGY. We look forward to speaking with you!</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #0369a1; margin-top: 0;">Appointment Details</h3>
            <p style="font-size: 18px; margin: 10px 0;"><strong>${formattedDate}</strong></p>
            <p style="font-size: 24px; color: #0369a1; font-weight: bold; margin: 10px 0;">${time}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Discussion Topic:</strong></p>
            <p style="margin: 10px 0 0 0;">${topic}</p>
          </div>
          
          <p>If you need to reschedule or cancel your appointment, please contact us at:</p>
          <ul style="list-style: none; padding: 0;">
            <li>Email: <a href="mailto:info@bmindsets.com" style="color: #0369a1;">info@bmindsets.com</a></li>
            <li>Phone: <a href="tel:+919493604752" style="color: #0369a1;">+91 9493604752</a></li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 12px; text-align: center;">
            BMINDSET TECHNOLOGY | Unleashing the Power of Maps & Satellite Data<br>
            <a href="https://www.bmindsets.com" style="color: #0369a1;">www.bmindsets.com</a>
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json({ 
      success: true, 
      message: "Appointment booked successfully" 
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      { error: "Failed to book appointment. Please try again later." },
      { status: 500 }
    );
  }
}

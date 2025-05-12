import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, emailAddress, mobileNumber, message, token } = body;

    // Validate required fields
    if (!name || !emailAddress || !mobileNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate Turnstile token
    if (!token) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Verify the token with Cloudflare Turnstile
    const formData = new FormData();
    formData.append(
      "secret",
      process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || ""
    );
    formData.append("response", token);

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    const turnstileData = await turnstileResponse.json();

    // If verification failed
    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Use this verified sender to start
        to: process.env.CONTACT_EMAIL_TO || "your-email@example.com", // Add your email here as fallback
        subject: "New Contact Form Submission - Tirpok Cleaners",
        replyTo: emailAddress,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${emailAddress}</p>
          <p><strong>Mobile:</strong> ${mobileNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (error) {
        console.error("Email error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully",
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred processing your request" },
      { status: 500 }
    );
  }
}

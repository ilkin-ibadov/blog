import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "We Received Your Message!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f9fafb;">
          <div style="background-color: #f9fafb; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto;">
              <!-- Header with Logo -->
              <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://i.ibb.co/d0NhjY9V/Logo.png" alt="MetaBlog Logo" style="width: 140px; height: auto;" />
              </div>
              
              <!-- Main Content Card -->
              <div style="background: #ffffff; border-radius: 12px; padding: 40px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h1 style="color: #1a1a1a; font-size: 24px; font-weight: 600; margin: 0 0 24px 0;">Thank You for Reaching Out!</h1>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  Hello ${name},
                </p>

                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  We've received your message and wanted to let you know that we'll be reviewing it shortly. Here's what you sent us:
                </p>

                <!-- Message Quote Box -->
                <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 6px; margin: 0 0 24px 0;">
                  <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0; font-style: italic;">
                    "${message}"
                  </p>
                </div>

                <!-- Timeline Section -->
                <div style="margin: 32px 0;">
                  <div style="display: flex; margin-bottom: 16px;">
                    <div style="min-width: 24px; height: 24px; background-color: #3b82f6; border-radius: 50%; margin-right: 12px;"></div>
                    <div>
                      <p style="color: #1a1a1a; font-weight: 500; margin: 0 0 4px 0;">Message Received</p>
                      <p style="color: #6b7280; font-size: 14px; margin: 0;">We've got your message</p>
                    </div>
                  </div>
                  <div style="display: flex;">
                    <div style="min-width: 24px; height: 24px; background-color: #e5e7eb; border-radius: 50%; margin-right: 12px;"></div>
                    <div>
                      <p style="color: #1a1a1a; font-weight: 500; margin: 0 0 4px 0;">Team Review</p>
                      <p style="color: #6b7280; font-size: 14px; margin: 0;">Our team will review and respond shortly</p>
                    </div>
                  </div>
                </div>

                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  We typically respond within 24-48 hours. In the meantime, feel free to check out our latest blog posts and resources.
                </p>

                <!-- Action Button -->
                <div style="text-align: center; margin: 32px 0;">
                  <a href="/blogs" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">View Latest Posts</a>
                </div>

                <!-- Footer -->
                <div style="border-top: 1px solid #e5e7eb; margin-top: 32px; padding-top: 32px;">
                  <p style="color: #6b7280; font-size: 14px; margin: 0; text-align: center;">
                    Best regards,<br>
                    <strong style="color: #374151;">The MetaBlog Team</strong>
                  </p>
                </div>
              </div>

              <!-- Footer Links -->
              <div style="text-align: center; margin-top: 32px;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  2024 MetaBlog. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
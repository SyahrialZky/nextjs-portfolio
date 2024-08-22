import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, subject, message } = await request.json();

  // Setup Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail password or App password
    },
  });

  const mailOptions = {
    from: email,
    to: "syahrialrizky04@gmail.com",
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}

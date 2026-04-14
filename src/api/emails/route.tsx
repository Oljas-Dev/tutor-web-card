import { Resend } from "resend";
import { StripeWelcomeEmail as Welcome } from "../../../react-email-starter/emails/stripe-welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "medetbaevoljas@gmail.com",
      subject: "My first email with Resend",
      react: <Welcome />,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

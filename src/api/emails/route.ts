import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "medetbaevoljas@gmail.com",
    subject: "My first email with Resend",
    react: Welcome,
  });
}

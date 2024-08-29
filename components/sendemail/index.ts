"use server";
import { Resend } from "resend";

const resend = new Resend(`process.env.RESEND_API_KEY`);

export const sendEmail = async (formData: FormData) => {
  console.log(formData);

  await resend.emails.send({
    from: "Tamson Construction LLC <onboarding@resend.dev>",
    to: "tamquocnguyen@gmail.com",
    subject: formData.get("subject") as string,
    html: formData.get("message") as string,
  });
};

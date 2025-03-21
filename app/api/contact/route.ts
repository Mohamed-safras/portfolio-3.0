// import { NextResponse, NextRequest } from "next/server";

// import { transporter } from "../../../lib/mailsender";
import nodemailer from "nodemailer";

// export async function POST(req: NextRequest, res: NextResponse) {
// const { from, subject, text, html } = req.json();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   secure: true,
//   port: 465,
//   tls: {
//     ciphers: "SSLv3",
//     rejectUnauthorized: false,
//   },
//   auth: {
//     type: "OAuth2",
//     // pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
//     user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
//     clientId: process.env.NEXT_PUBLIC_OAUTH_CLIENTID,
//     clientSecret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN,
//   },
// });

// console.log(transporter);

// try {
//   await transporter.sendMail({
//     from,
//     to: "awsafras8100@gmail.com",
//     replyTo: "awsafras8100@gmail.com",
//     subject: `Website activity from`,
//     html: `
//       `,
//   });

// res.status(200).json({ message: "Email sent successfully!" });

// NextResponse.json({ message: "Success: email was sent" });
// } catch (error: any) {
//   console.log(error);
//   res
//     .status(500)
//     .json({ message: "Failed to send email.", error: error.message });
// }
// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { from, subject, text, html } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      port: 465,

      auth: {
        type: "OAuth2",
        // pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
        user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        clientId: process.env.NEXT_PUBLIC_OAUTH_CLIENTID,
        clientSecret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN,
      },
    });

    await transporter.sendMail({
      from,
      to: process.env.NEXT_PUBLIC_MAIL_USERNAME,
      replyTo: process.env.NEXT_PUBLIC_MAIL_USERNAME,
      subject,
      html,
    });
    return NextResponse.json(
      { message: "This is a post request" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 400 });
  }
}

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    type: "OAuth2",
    // pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
    clientId: process.env.NEXT_PUBLIC_OAUTH_CLIENTID,
    clientSecret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN,
    accessToken: process.env.NEXT_PUBLIC_OAUTH_ACCESS_TOKEN,
  },
});

import nodemailer from "nodemailer";
import { rendered } from "@/utils";

import type { NextApiRequest, NextApiResponse } from "next";
import type { EmailPayload } from "@/types";

type ResData = {
  status: string;
};

const { MAIL_USER: user, MAIL_PASS: pass } = process.env;

async function SendEmail({ to, html, subject }: EmailPayload) {
  if (user !== undefined && pass !== undefined) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      host: "smtp.gmail.com",
      auth: { user, pass },
    });

    return transporter.sendMail({
      from: {
        name: "Tsumi",
        address: user,
      },
      to,
      html,
      subject,
      priority: "high",
    });
  } else {
    throw Error("No ENV provided, please provide env variables for mail account");
  }
}

export default function handler({ method, body }: NextApiRequest, res: NextApiResponse<ResData>) {
  if (method === "POST") {
    console.log(body);

    try {
      const { email, contactType, message, name } = JSON.parse(body);

      SendEmail({
        to: email,
        html: rendered(message, name),
        subject: contactType,
      });

      res.status(200).json({ status: "200" });
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json({ status: e.message });
      } else {
        res.status(400).json({ status: e + "" });
      }
    }
  }
}

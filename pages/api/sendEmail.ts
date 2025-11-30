// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter, mailOptions } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.email ||
      !data.name ||
      !data.message ||
      !data.category
    ) {
      console.log(req.body);
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Enquiry Request for ${data.category}`,
        text: `You have a New Enquiry from Customer\nName of the Customer: \t${data.name}\nEmail: \t${data.email}\nService Requested: \t${data.category}\n\nMessage: \t${data.message}\n\nPlease contact the customer through the above email as soon as possible.\nThank You Nandri.`,
      });
      return res.status(200).json({ message: "Success" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "Error" });
    }
  }
  // console.log(req.body)
  res.status(400).json({ message: "Bad Request" });
};

export default handler;

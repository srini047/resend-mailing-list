import type { NextApiRequest, NextApiResponse } from "next";
import { WaitlistEmail } from "../../../transactional/emails/waitlist";
import { resend } from "../../lib/resend";

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      const data = await resend.sendEmail({
        from: "preview@react.email",
        to: "sriniketh@gmail.com",
        subject: "Waitlist",
        react: WaitlistEmail({ name: "Tester-1" }),
      });

      return res.status(200).send(data);
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;

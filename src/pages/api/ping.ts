import { NextApiRequest, NextApiResponse } from "next";

type Pong = { name: string };

export default function handler(_req: NextApiRequest, res: NextApiResponse<Pong>) {
  res.status(200).json({
    name: "pong",
  });
}

import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  status: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {}

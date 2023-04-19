import { NextApiRequest, NextApiResponse } from "next";

type Res = { response: string };

export default function handler({ query }: NextApiRequest, res: NextApiResponse<Res>) {
  const { uname, pw } = query;

  // console.log(uname, pw);
  // console.log(process.env['HOST']);

  if (uname === undefined && pw === undefined) {
    res.status(404).json({ response: "error no data provided pls contact admin!" });
  } else {
    res.status(200).json({ response: "Something" });
  }
}

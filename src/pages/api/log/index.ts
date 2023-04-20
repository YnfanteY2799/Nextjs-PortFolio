import { NextApiRequest, NextApiResponse } from "next";
import { get_token, validateLogin, validateToken } from "@/utils";
import { AuthRes } from "@/types";

export default async function handler(
  { query, cookies }: NextApiRequest,
  res: NextApiResponse<AuthRes>
) {
  const { uname, pw } = query;
  const { portfolioToken } = cookies;

  if (uname === undefined && pw === undefined) {
    res.status(404).json({ response: "error no data provided pls contact admin!" });
  } else {
    const rvalidU = (uname ?? "").toString();
    const rvalidP = (pw ?? "").toString();

    const { isValid, username } = await validateLogin(rvalidU, rvalidP);

    if (portfolioToken !== undefined && validateToken(portfolioToken, username)) {
      res.redirect("/edit");
    } else if (portfolioToken === undefined && isValid) {
      res.setHeader("Set-Cookie", get_token(username));
      res.status(200).json({ response: "Something", username });
    } else {
      res.status(400).json({ response: "error user not allowed" });
    }
  }
}

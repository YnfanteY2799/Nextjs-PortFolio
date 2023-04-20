import { serialize } from "cookie";
import jwt, { JwtPayload } from "jsonwebtoken";

import { supabase } from "@/base";
import { CustomValid } from "@/types";

const EXPIRATION_TOKEN_TIME = 604800000;
const SECRET_TOKEN_KEY = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export async function validateLogin(username: string, pw: string): Promise<CustomValid> {
  const { data } = await supabase.from("users").select().eq("name", username);
  if (data === undefined || data === null || data?.length < 1)
    return { isValid: false, username: "" };

  const { pword } = (data ?? [])[0];
  return { isValid: pw === pword, username };
}

export function get_token(username: string): string {
  const token = jwt.sign(
    {
      username,
      exp: EXPIRATION_TOKEN_TIME,
    },
    SECRET_TOKEN_KEY ?? "secret",
    {
      algorithm: "HS512",
    }
  );

  const serializedToken = serialize("portfolioToken", token, {
    sameSite: "strict",
    maxAge: EXPIRATION_TOKEN_TIME,
    path: "/",
  });
  return serializedToken;
}

export function validateToken(token: string, uname: string): boolean {
  const decodedToken = jwt.decode(token, {
    complete: true,
  })?.payload;

  if (decodedToken !== undefined || typeof decodedToken !== "string") {
    const { username } = JSON.parse(JSON.stringify(decodedToken));
    return username === uname;
  } else {
    return false;
  }
}

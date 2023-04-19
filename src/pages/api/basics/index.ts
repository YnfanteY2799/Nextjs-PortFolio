import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/base";

import type { data } from "@/types";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<data>) {
  const { data: structure } = await supabase.from("portfolio_structure").select("*");
  const managedData:data = (structure ?? []).flatMap((x) => x.data)[0];
  res.status(200).json(managedData);
}
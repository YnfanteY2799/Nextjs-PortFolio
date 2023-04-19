import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/base";

import type { SectionType, data } from "@/types";

const sections: Array<SectionType> = [
  { id: "", name: "Home", img: "home" },
  { id: "About", name: "About", img: "info" },
  { id: "Exp", name: "Experience", img: "stars" },
  { id: "Projects", name: "Projects", img: "brief" },
  { id: "Contact", name: "Contact", img: "world" },
]

export default async function handler(_req: NextApiRequest, res: NextApiResponse<data>) {
  const { data: structure } = await supabase.from("portfolio_structure").select("*");
  const managedData:data = (structure ?? []).flatMap((x) => x.data)[0];
  res.status(200).json({...managedData, sections});
}
import { ReactElement, useState } from "react";
import { GetServerSideProps } from "next";
import { data } from "@/types";
import { Fetch } from "@/utils";

export default function EditPage(props: data): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { portfolioToken } = ctx.req.cookies;

  if (portfolioToken === undefined) return { redirect: "/", props: {} };

  const basicData: data = await (await Fetch("/basics")).json();
  return { props: basicData };
};

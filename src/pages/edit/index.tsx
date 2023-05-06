import { ReactElement, useState } from "react";
import { GetServerSideProps } from "next";
import { data } from "@/types";
import { Fetch } from "@/utils";
import { PageWrapper } from "@/components";
import Navbar from "@/components/ui/Navbar/intro/Navbar";

export default function EditPage(props: data): ReactElement {
  return (
    <PageWrapper>
      <Navbar />
    </PageWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { portfolioToken } = ctx.req.cookies;

  if (portfolioToken === undefined) return { redirect: "/", props: {} };

  const basicData: data = await (await Fetch("/basics")).json();
  return { props: basicData };
};

import { PageWrapper, BlogSection as Blog } from "@/components";
import { useSessionStore } from "@/store";

import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";

export default function BlogPage(): ReactElement {
  // Hooks
  const { setTheme, theme } = useSessionStore();

  return (
    <PageWrapper ChangeTheme={setTheme} Theme={theme} animated external>
      <Blog />
    </PageWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (_) => {
  return { props: {} };
};

import { ReactElement } from "react";
import { PageWrapper } from "@/components";
import { useSessionStore } from "@/store";

export default function AboutPage(): ReactElement {
  const { theme, setTheme } = useSessionStore();

  return (
    <PageWrapper ChangeTheme={setTheme} Theme={theme} animated>
      AboutPage
    </PageWrapper>
  );
}

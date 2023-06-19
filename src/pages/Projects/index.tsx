import { type ReactElement } from "react";
import { useSessionStore } from "@/store";
import { PageWrapper } from "@/components";

export default function ProjectsPage(): ReactElement {
  const { theme, setTheme } = useSessionStore();

  return (
    <PageWrapper Theme={theme} ChangeTheme={setTheme} animated>
      Projects Page
    </PageWrapper>
  );
}

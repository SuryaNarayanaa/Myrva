import "fumadocs-ui/style.css";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { Provider } from "../provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <DocsLayout
        tree={source.pageTree}
        nav={{ title: "Myrva Docs", url: "/docs" }}
        links={[]}
      >
        {children}
      </DocsLayout>
    </Provider>
  );
}

import { PageIntro } from "../components/PageIntro";
import { Shell } from "../components/Shell";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta("Page Not Found | Charlie Zhang");

  return (
    <Shell>
      <PageIntro
        eyebrow="404"
        title="Page not found."
        description="The page you tried to open does not exist in the React refactor."
      />
      <a className="home-link" href="/">
        Return to the homepage
      </a>
    </Shell>
  );
}

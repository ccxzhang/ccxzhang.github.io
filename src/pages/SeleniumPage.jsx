import { EmbedFrame } from "../components/EmbedFrame";
import { PageIntro } from "../components/PageIntro";
import { Shell } from "../components/Shell";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function SeleniumPage() {
  useDocumentMeta("Selenium Tutorial | Charlie Zhang");

  return (
    <Shell>
      <PageIntro
        eyebrow="Tutorial"
        title="Selenium slides"
        description="The original slide deck is preserved as an embedded legacy document."
      />
      <EmbedFrame title="Selenium tutorial slides" src="/legacy/selenium_slides.html" ratio="72%" />
    </Shell>
  );
}

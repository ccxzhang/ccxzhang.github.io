import { PageIntro } from "../components/PageIntro";
import { Shell } from "../components/Shell";
import { blogSections } from "../content/blogSections";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function linkProps(external) {
  return external ? { target: "_blank", rel: "noreferrer" } : {};
}

export function BlogPage() {
  useDocumentMeta("Blog | Charlie Zhang");

  return (
    <Shell>
      <PageIntro
        eyebrow="Blog"
        title="Notes, tutorials, and project links."
        description="A curated index of tutorials, causal inference notes, visualization work, and reproducibility projects."
      />
      <div className="stack">
        {blogSections.map((section) => (
          <section className="list-card" key={section.title}>
            <h3>{section.title}</h3>
            <ul className="link-list">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} {...linkProps(link.external)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Shell>
  );
}

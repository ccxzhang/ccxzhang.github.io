import { PageIntro } from "./PageIntro";
import { Shell } from "./Shell";

export function PostLayout({ title, category, tags, children }) {
  return (
    <Shell>
      <article className="post">
        <PageIntro eyebrow={category} title={title} description="by Charlie Zhang" />
        <div className="post-body">{children}</div>
        {tags?.length ? (
          <footer className="tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </footer>
        ) : null}
      </article>
    </Shell>
  );
}

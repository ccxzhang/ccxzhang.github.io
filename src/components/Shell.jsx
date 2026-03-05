import { site } from "../content/site";

export function Shell({ children }) {
  return (
    <div className="site-shell">
      <aside className="site-sidebar">
        <div className="brand-block">
          <p className="brand-kicker">Portfolio</p>
          <h1 className="brand-title">
            <a href="/">{site.name}</a>
          </h1>
          <p className="brand-copy">
            {site.blurb}
            <br />
            {site.email}
          </p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/blog.html">Blog</a>
        </nav>
        <footer className="site-footer">
          <p>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </footer>
      </aside>
      <main className="site-main">{children}</main>
    </div>
  );
}

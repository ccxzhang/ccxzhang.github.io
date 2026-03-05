export function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro">
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="page-description">{description}</p> : null}
    </header>
  );
}

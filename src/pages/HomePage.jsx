import { Shell } from "../components/Shell";
import { PageIntro } from "../components/PageIntro";
import { experienceGroups } from "../content/experience";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta("Charlie Zhang");

  return (
    <Shell>
      <PageIntro
        eyebrow="About"
        title="Research, data science, and applied policy analysis."
      />

      <section className="card-grid">
        <article className="info-card">
          <h3>Interests</h3>
          <p>
            <strong>Substantive:</strong> Governance, Political Economy, Development Economics, Public Opinion
          </p>
          <p>
            <strong>Methodological:</strong> Causal Inference, Machine Learning
          </p>
        </article>
        <article className="info-card">
          <h3>Skills</h3>
          <p>
            <strong>Programming:</strong> R, Python, JavaScript, HTML/CSS, MySQL
          </p>
          <p>
            <strong>Frameworks:</strong> Node.js, React, Django, Flask, Shiny, PySpark, Tensorflow, Keras
          </p>
          <p>
            <strong>Libraries:</strong> Scrapy, Gensim, SpaCy, Sklearn, Bokeh, Plotly, Folium
          </p>
        </article>
      </section>

      <section className="stack">
        {experienceGroups.map((group) => (
          <details className="timeline-card timeline-panel" key={group.title} open={group.title === "Current Position"}>
            <summary className="timeline-summary">
              <h4>{group.title}</h4>
            </summary>
            <div className="timeline-list">
              {group.items.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.location}`}>
                  <div className="timeline-company-row">
                    <h5 className="timeline-company">
                      {item.companyHref ? (
                        <a href={item.companyHref} target="_blank" rel="noreferrer">
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </h5>
                    <p className="timeline-meta">{item.location}</p>
                  </div>
                  {item.roles.map((role) => (
                    <div className="timeline-role-block" key={`${item.company}-${role.title}`}>
                      <div className="timeline-role-row">
                        <p className="timeline-role">{role.title}</p>
                        <p className="timeline-meta">{role.dates}</p>
                      </div>
                      <ul>
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </details>
        ))}
      </section>
    </Shell>
  );
}

import { Shell } from "../components/Shell";
import { PageIntro } from "../components/PageIntro";
import { educationItems } from "../content/education";
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

      <section className="stack">
        {experienceGroups.map((group) => (
          <details
            className="timeline-card timeline-panel"
            key={group.title}
            open={group.title === "Current Position"}
          >
            <summary className="timeline-summary">
              <h4>{group.title}</h4>
            </summary>
            <div className="timeline-list">
              {group.items.map((item) => (
                <article
                  className="timeline-item"
                  key={`${item.company}-${item.location}`}
                >
                  <div className="timeline-company-row">
                    <h5 className="timeline-company">
                      {item.companyHref ? (
                        <a
                          href={item.companyHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </h5>
                    <p className="timeline-meta">{item.location}</p>
                  </div>
                  {item.roles.map((role) => (
                    <div
                      className="timeline-role-block"
                      key={`${item.company}-${role.title}`}
                    >
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

      <details className="timeline-card timeline-panel education-panel">
        <summary className="timeline-summary">
          <h4>Education</h4>
        </summary>
        <div className="timeline-list">
          {educationItems.map((item) => (
            <article
              className="timeline-item"
              key={`${item.institution}-${item.degree}`}
            >
              <div className="timeline-company-row">
                <h5 className="timeline-company">
                  {item.institutionHref ? (
                    <a
                      href={item.institutionHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.institution}
                    </a>
                  ) : (
                    item.institution
                  )}
                </h5>
                <p className="timeline-meta">{item.location}</p>
              </div>
              <div className="timeline-role-row">
                <p className="timeline-role">{item.degree}</p>
                <p className="timeline-meta">{item.dates}</p>
              </div>
              {item.detail ? (
                <p className="timeline-detail">{item.detail}</p>
              ) : null}
            </article>
          ))}
        </div>
      </details>

      <section className="card-grid skills-section">
        <article className="info-card">
          <h3>Skills</h3>
          <div className="info-card-list">
            <p>
              <strong>Programming</strong>
              <span>R, Python, JavaScript, HTML/CSS, MySQL</span>
            </p>
            <p>
              <strong>Frameworks</strong>
              <span>
                Node.js, React, Django, Flask, Shiny, PySpark, Tensorflow, Keras
              </span>
            </p>
            <p>
              <strong>Libraries</strong>
              <span>Scrapy, Gensim, SpaCy, Sklearn, Bokeh, Plotly, Folium</span>
            </p>
          </div>
        </article>
      </section>
    </Shell>
  );
}

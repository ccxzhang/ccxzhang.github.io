import { useEffect } from "react";

const site = {
  name: "Charlie Zhang",
  blurb: "MS-DSPP 22' @ Georgetown",
  email: "cz317 [at] georgetown.edu",
  linkedin: "https://www.linkedin.com/in/chenxiao-charlie-zhang-b639a1128/",
  github: "https://github.com/ccxzhang"
};

const blogSections = [
  {
    title: "Tutorial",
    links: [{ label: "Tutorial on Selenium", href: "/blog/selenium_slides.html" }]
  },
  {
    title: "Data Archive",
    links: [
      {
        label: "Solomon Islands Data Archive",
        href: "https://si-data-archive.streamlit.app/",
        external: true
      }
    ]
  },
  {
    title: "Notes",
    links: [
      { label: "Differences-in-Differences", href: "/blog/CausalInference/DiD.html" },
      { label: "Regression Discontinuity Designs", href: "/blog/CausalInference/RDDs.html" }
    ]
  },
  {
    title: "Data Visualization",
    links: [
      {
        label: "Understanding China's Ideological Landscape - A Mixed Approach",
        href: "https://ccxzhang.github.io/4dataviz/",
        external: true
      },
      {
        label: "D3.js Visualizations",
        href: "https://charliezhang.net/d3viz",
        external: true
      }
    ]
  },
  {
    title: "GeoSpatial Analysis",
    links: [
      { label: "GeoSpatial Analysis", href: "/blog/geospatial/" },
      {
        label: "Tutorial on GeoSpatial Visualization (Cartopy and Folium)",
        href: "https://nbviewer.org/github/ccxzhang/GeoSpatialViz/blob/7e3edc747fb70677b23a31194cbf64a731bb099c/GeoSpatialTutorial.ipynb",
        external: true
      },
      {
        label: "2021 DC Theft Map",
        href: "https://dc-theft-map.herokuapp.com/",
        external: true
      },
      { label: "Other examples", href: "/blog/map_examples/" }
    ]
  },
  {
    title: "Projects",
    links: [
      {
        label: "Time Series Analysis",
        href: "https://charliezhang.georgetown.domains/ts.html",
        external: true
      },
      {
        label: "Replication for The Impact of High School Financial Education: Evidence from a Large-Scale Evaluation in Brazil",
        href: "/blog/replication/"
      }
    ]
  }
];

const experienceGroups = [
  {
    title: "Current Position",
    items: [
      {
        role: "Data Science Consultant at the World Bank",
        bullets: [
          "Develop the methodology of employing non-survey data sources to assess Pacific Islands Countries' tourism industry under data-sparse situations.",
          "Perform time series and econometric analysis on merged data, improving forecast RMSE by 41% in combined models.",
          "Produce data visualizations and analytical support for the Pacific Observatory."
        ]
      }
    ]
  },
  {
    title: "Past Experiences",
    items: [
      {
        role: "Consultant at International Initiative for Impact Evaluation (3ie)",
        href: "https://www.3ieimpact.org/",
        bullets: [
          "Reviewed literature and identified robustness checks relevant to contemporary causal inference techniques.",
          "Researched how remote sensing techniques can be implemented in impact evaluations."
        ]
      },
      {
        role: "Data Science Intern at Development Impact Evaluation (DIME), The World Bank",
        href: "https://www.worldbank.org/en/research/dime",
        bullets: [
          "Cleaned, linked, and managed administrative datasets while supporting statistical analysis and visualization."
        ]
      },
      {
        role: "MDI Scholar at the Massive Data Institute",
        href: "https://mccourt.georgetown.edu/research/the-massive-data-institute/",
        bullets: [
          "Helped resolve storage and scraping issues for Crawl4All and supported collection of 1 TB+ of charter school web data."
        ]
      },
      {
        role: "Research Assistant for Dr. Marko Klasnja",
        href: "http://markoklasnja.com/",
        bullets: [
          "Scraped and parsed financial disclosure information from office holders in multiple countries.",
          "Cleaned and analyzed Survey of Consumer Finances data spanning 1983 onward."
        ]
      },
      {
        role: "Research Assistant at the Lugar Center",
        bullets: [
          "Scraped 116th Congress bills from GovTrack and contributed to the Lugar Center's Bipartisan Index."
        ]
      },
      {
        role: "Research Assistant for Dr. Yao-tai Li",
        href: "https://yaotaili.wordpress.com/about/",
        bullets: [
          "Collected and analyzed Lennon Wall posts and co-designed the coding framework.",
          "Contributed to an archive later published by Initium and recognized by the 2021 Human Rights Press Awards."
        ]
      }
    ]
  }
];

function useDocumentMeta(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function useMathJax(enabled) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const existing = document.getElementById("mathjax-script");

    if (existing) {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise();
      }
      return undefined;
    }

    window.MathJax = {
      tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["$$", "$$"]]
      }
    };

    const script = document.createElement("script");
    script.id = "mathjax-script";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    script.onload = () => {
      window.MathJax?.typesetPromise?.();
    };
    document.head.appendChild(script);

    return undefined;
  }, [enabled]);
}

function linkProps(external) {
  return external ? { target: "_blank", rel: "noreferrer" } : {};
}

function Shell({ children }) {
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

function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro">
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="page-description">{description}</p> : null}
    </header>
  );
}

function HomePage() {
  useDocumentMeta("Charlie Zhang");

  return (
    <Shell>
      <PageIntro
        eyebrow="About"
        title="Research, data science, and applied policy analysis."
        description="Personal site for selected work across causal inference, machine learning, and public-interest data projects."
      />

      <section className="card-grid">
        <article className="info-card">
          <h3>Interests</h3>
          <p>
            <strong>Substantive:</strong> Governance, Political Economy, Development Economics, Public
            Opinion
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
            <strong>Frameworks:</strong> Node.js, React, Django, Flask, Shiny, PySpark, Tensorflow,
            Keras
          </p>
          <p>
            <strong>Libraries:</strong> Scrapy, Gensim, SpaCy, Sklearn, Bokeh, Plotly, Folium
          </p>
        </article>
      </section>

      <section className="stack">
        <div className="section-header">
          <h3>Experience</h3>
          <a href="https://www.dropbox.com/s/h1kqrk40l6rcbge/resume_cz.pdf?dl=0" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        {experienceGroups.map((group) => (
          <section className="timeline-card" key={group.title}>
            <h4>{group.title}</h4>
            <div className="timeline-list">
              {group.items.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <h5>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.role}
                      </a>
                    ) : (
                      item.role
                    )}
                  </h5>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </Shell>
  );
}

function BlogPage() {
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

function PostLayout({ title, category, tags, children }) {
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

function DidPage() {
  useDocumentMeta("Differences-in-Differences | Charlie Zhang");
  useMathJax(true);

  return (
    <PostLayout title="Differences-in-Differences" category="Causal Inference" tags={["Causal Inference"]}>
      <p>Assumptions:</p>
      <ol>
        <li>SUTVA</li>
        <li>Strict exogeneity</li>
        <li>Parallel trends assumption</li>
        <li>No anticipatory effects</li>
      </ol>
      <p>
        Differences-in-Differences combines <strong>cross-sectional treatment-control comparisons</strong> and{" "}
        <strong>before-after</strong> studies:
      </p>
      <p>{String.raw`$$ y_{ist}= \gamma_{s} + \lambda_{t} + \beta D_{st} + \epsilon_{ist} $$`}</p>
      <p>
        where {String.raw`\(\lambda_t\)`} is before/after fixed effects and{" "}
        {String.raw`\(E(\epsilon_{ist} \mid s,t) = 0\)`}.
      </p>
      <p>{String.raw`$$
\begin{align*}
\Delta_{treatment} & = E[y_{ist} \mid s = treatment, t = after] - E[y_{ist} \mid s = treatment, t = before] \\
& = \lambda_{after} - \lambda_{before} + \beta \\
\Delta_{control} &= E[y_{ist} \mid s = control, t = after] - E[y_{ist} \mid s = control, t = before] \\
& = \lambda_{after} - \lambda_{before}
\end{align*}
$$`}</p>
      <p>{String.raw`$$DiD = \hat{\beta} = \Delta_{treatment} - \Delta_{control}$$`}</p>
      <p>
        Further considerations:{" "}
        <a
          href="https://www.scielo.br/j/rmj/a/KhRXgcqvzFcRFmtfZB5zF7b/?lang=en&format=html"
          target="_blank"
          rel="noreferrer"
        >
          Fredriksson and Oliveira, 2019
        </a>
      </p>
      <ol>
        <li>
          <strong>Using control variables for a more robust identification</strong>
          <ul>
            <li>Including individual-level controls can reduce estimator variance even when identification is unchanged.</li>
          </ul>
        </li>
        <li>
          <strong>Standard errors</strong>
          <ul>
            <li>
              Serial correlation matters in long DD panels. See{" "}
              <a href="https://doi.org/10.1162/003355304772839588" target="_blank" rel="noreferrer">
                Bertrand, Duflo, and Mullainathan (2004)
              </a>
              .
            </li>
            <li>Dependent variables are often highly serially correlated.</li>
            <li>Treatment indicators often vary little within a unit over time.</li>
          </ul>
        </li>
        <li>
          <strong>Balancing tests for changes in composition</strong>
          <ul>
            <li>
              In DD, validity depends on stable differences between groups and on treatment exposure not coinciding with
              compositional shifts in covariates.
            </li>
            <li>One empirical check is to fit the standard DID model using a covariate as the outcome variable.</li>
            <li>{String.raw`$$ C_{gt}= a_g+ b_t+ D_{gt}\delta^{'}+ \varepsilon_{gt} $$`}</li>
          </ul>
        </li>
      </ol>
      <p>Alternative approach:</p>
      <ol>
        <li>
          <strong>Difference-in-Difference-in-Differences</strong>
          <ul>
            <li>Triple-difference designs add another untreated comparison to control for remaining confounding patterns.</li>
          </ul>
        </li>
      </ol>
    </PostLayout>
  );
}

function RddPage() {
  useDocumentMeta("Regression Discontinuity Designs | Charlie Zhang");
  useMathJax(true);

  return (
    <PostLayout title="Regression Discontinuity Designs" category="Causal Inference">
      <h3>Sharp RD (SRD)</h3>
      <p>Assumptions:</p>
      <ol>
        <li>{String.raw`\(Y_{i}(0), Y_{i}(1) \perp W_{i} \mid X_{i}\)`} (unconfoundedness)</li>
        <li>
          Continuity of conditional regression functions. See{" "}
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304407607001091" target="_blank" rel="noreferrer">
            Imbens and Lee (2008)
          </a>
          .
        </li>
        <li>Continuity of conditional distribution functions.</li>
      </ol>
      <p>
        Treatment status is a deterministic and discontinuous function of a covariate, with the forcing variable
        crossing a threshold {String.raw`\(\,x^*\,\)`}.
      </p>
      <p>{String.raw`$$\tau_{SRD} = E[Y_{1} − Y_{0} \mid X_{i} = c] = \lim_{x \downarrow c} E[Y_{i} \mid X_{i} = x] − \lim_{x \uparrow c} E[Y_{i} \mid X_{i} = x]$$`}</p>
      <h3>Fuzzy RD (FRD)</h3>
      <p>
        When treatment probability changes discontinuously at the threshold instead of jumping from zero to one, the
        discontinuity identifies a local complier effect.
      </p>
      <p>{String.raw`$$\tau_{FRD} = \frac{\lim_{x \downarrow c} E[Y \mid X=x] - \lim_{x \uparrow c} E[Y \mid X=x]}{\lim_{x \downarrow c} E[W \mid X=x] - \lim_{x \uparrow c} E[W \mid X=x]}$$`}</p>
      <h3>Other considerations</h3>
      <ol>
        <li>Both SRD and FRD identify effects local to units near the cutoff.</li>
        <li>RD designs typically trade external validity for strong internal validity near the threshold.</li>
      </ol>
    </PostLayout>
  );
}

function ReplicationPage() {
  useDocumentMeta("Replication | Charlie Zhang");

  return (
    <PostLayout
      title="Replication for The Impact of High School Financial Education: Evidence from a Large-Scale Evaluation in Brazil"
      category="Project"
      tags={["Replication", "Reproducibility"]}
    >
      <p>
        The replication materials were obtained via{" "}
        <a href="http://doi.org/10.3886/E116339V1" target="_blank" rel="noreferrer">
          the original archive
        </a>{" "}
        and saved in the <code>Data</code> folder of the{" "}
        <a href="https://github.com/ccxzhang/I4R-BLLMZ-AEJ-2015/" target="_blank" rel="noreferrer">
          GitHub repository
        </a>
        .
      </p>
      <p>The replication procedures are:</p>
      <ul>
        <li>Run the Stata do file and compare generated tables against the published paper.</li>
        <li>Repeat the workflow in Python and identify any inconsistencies in the results.</li>
      </ul>
      <h3>Issues</h3>
      <p>This page is now managed in React and ready for expansion with notes, discrepancies, or reproducibility findings.</p>
    </PostLayout>
  );
}

function GeospatialPage() {
  useDocumentMeta("Geospatial Analysis | Charlie Zhang");

  return (
    <PostLayout title="Geospatial Analysis" category="Reference" tags={["Map", "Geospatial Analysis"]}>
      <h3>Packages and usages</h3>
      <ul>
        <li>
          <a
            href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.1.geopandas.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            GeoPandas
          </a>
        </li>
        <li>
          <a
            href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.2.rasterio.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            Rasterio/Xarray
          </a>{" "}
          for raster data
        </li>
        <li>
          <a
            href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.3.gee.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            Google Earth Engine
          </a>
        </li>
        <li>
          <a
            href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.4.osm.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            OpenStreetMap / OSMNX
          </a>
        </li>
        <li>
          <a
            href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.5.h3-py.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            H3
          </a>
        </li>
      </ul>
    </PostLayout>
  );
}

function EmbedFrame({ title, src, ratio = "62%" }) {
  return (
    <div className="embed-shell" style={{ "--embed-ratio": ratio }}>
      <iframe src={src} title={title} loading="lazy" allowFullScreen />
    </div>
  );
}

function MapExamplesPage() {
  useDocumentMeta("Map Examples | Charlie Zhang");

  return (
    <PostLayout title="More Map Examples" category="Visualization" tags={["Map", "Visualization"]}>
      <h3>A choropleth map on the US vaccination rate</h3>
      <EmbedFrame title="US vaccination map" src="/legacy/maps/us_vaccination_map.html" />
      <h3>2020 Presidential Election Map (DC, Maryland, and Virginia)</h3>
      <EmbedFrame title="DMV election map" src="/legacy/maps/DMV_2020_PreElec.html" />
    </PostLayout>
  );
}

function SeleniumPage() {
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

function NotFoundPage() {
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

const pages = {
  home: HomePage,
  blog: BlogPage,
  did: DidPage,
  rdd: RddPage,
  replication: ReplicationPage,
  geospatial: GeospatialPage,
  "map-examples": MapExamplesPage,
  selenium: SeleniumPage,
  "not-found": NotFoundPage
};

export default function App({ page }) {
  const Page = pages[page] || NotFoundPage;
  return <Page />;
}

import { ExternalLink } from "../components/ExternalLink";
import { PostLayout } from "../components/PostLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useMathJax } from "../hooks/useMathJax";

export function DidPage() {
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
        where {String.raw`\(\lambda_t\)`} is before/after fixed effects and {String.raw`\(E(\epsilon_{ist} \mid s,t) = 0\)`}.
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
        Further considerations: <ExternalLink href="https://www.scielo.br/j/rmj/a/KhRXgcqvzFcRFmtfZB5zF7b/?lang=en&format=html">Fredriksson and Oliveira, 2019</ExternalLink>
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
              Serial correlation matters in long DD panels. See <ExternalLink href="https://doi.org/10.1162/003355304772839588">Bertrand, Duflo, and Mullainathan (2004)</ExternalLink>.
            </li>
            <li>Dependent variables are often highly serially correlated.</li>
            <li>Treatment indicators often vary little within a unit over time.</li>
          </ul>
        </li>
        <li>
          <strong>Balancing tests for changes in composition</strong>
          <ul>
            <li>
              In DD, validity depends on stable differences between groups and on treatment exposure not coinciding with compositional shifts in covariates.
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

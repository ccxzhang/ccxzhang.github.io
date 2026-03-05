import { ExternalLink } from "../components/ExternalLink";
import { PostLayout } from "../components/PostLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useMathJax } from "../hooks/useMathJax";

export function RddPage() {
  useDocumentMeta("Regression Discontinuity Designs | Charlie Zhang");
  useMathJax(true);

  return (
    <PostLayout title="Regression Discontinuity Designs" category="Causal Inference">
      <h3>Sharp RD (SRD)</h3>
      <p>Assumptions:</p>
      <ol>
        <li>{String.raw`\(Y_{i}(0), Y_{i}(1) \perp W_{i} \mid X_{i}\)`} (unconfoundedness)</li>
        <li>
          Continuity of conditional regression functions. See <ExternalLink href="https://www.sciencedirect.com/science/article/abs/pii/S0304407607001091">Imbens and Lee (2008)</ExternalLink>.
        </li>
        <li>Continuity of conditional distribution functions.</li>
      </ol>
      <p>
        Treatment status is a deterministic and discontinuous function of a covariate, with the forcing variable crossing a threshold {String.raw`\(\,x^*\,\)`}.
      </p>
      <p>{String.raw`$$\tau_{SRD} = E[Y_{1} − Y_{0} \mid X_{i} = c] = \lim_{x \downarrow c} E[Y_{i} \mid X_{i} = x] − \lim_{x \uparrow c} E[Y_{i} \mid X_{i} = x]$$`}</p>
      <h3>Fuzzy RD (FRD)</h3>
      <p>
        When treatment probability changes discontinuously at the threshold instead of jumping from zero to one, the discontinuity identifies a local complier effect.
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

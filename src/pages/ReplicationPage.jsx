import { ExternalLink } from "../components/ExternalLink";
import { PostLayout } from "../components/PostLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function ReplicationPage() {
  useDocumentMeta("Replication | Charlie Zhang");

  return (
    <PostLayout
      title="Replication for The Impact of High School Financial Education: Evidence from a Large-Scale Evaluation in Brazil"
      category="Project"
      tags={["Replication", "Reproducibility"]}
    >
      <p>
        The replication materials were obtained via <ExternalLink href="http://doi.org/10.3886/E116339V1">the original archive</ExternalLink> and saved in the <code>Data</code> folder of the{" "}
        <ExternalLink href="https://github.com/ccxzhang/I4R-BLLMZ-AEJ-2015/">GitHub repository</ExternalLink>.
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

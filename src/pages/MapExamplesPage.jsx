import { EmbedFrame } from "../components/EmbedFrame";
import { PostLayout } from "../components/PostLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function MapExamplesPage() {
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

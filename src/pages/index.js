import { BlogPage } from "./BlogPage";
import { DidPage } from "./DidPage";
import { GeospatialPage } from "./GeospatialPage";
import { HomePage } from "./HomePage";
import { MapExamplesPage } from "./MapExamplesPage";
import { NotFoundPage } from "./NotFoundPage";
import { RddPage } from "./RddPage";
import { ReplicationPage } from "./ReplicationPage";
import { SeleniumPage } from "./SeleniumPage";

export const pages = {
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

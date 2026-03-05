import { ExternalLink } from "../components/ExternalLink";
import { PostLayout } from "../components/PostLayout";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function GeospatialPage() {
  useDocumentMeta("Geospatial Analysis | Charlie Zhang");

  return (
    <PostLayout title="Geospatial Analysis" category="Reference" tags={["Map", "Geospatial Analysis"]}>
      <h3>Packages and usages</h3>
      <ul>
        <li>
          <ExternalLink href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.1.geopandas.ipynb">GeoPandas</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.2.rasterio.ipynb">Rasterio/Xarray</ExternalLink> for raster data
        </li>
        <li>
          <ExternalLink href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.3.gee.ipynb">Google Earth Engine</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.4.osm.ipynb">OpenStreetMap / OSMNX</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nbviewer.org/github/ccxzhang/GeoSpatialAnalysis/blob/main/python/0.5.h3-py.ipynb">H3</ExternalLink>
        </li>
      </ul>
    </PostLayout>
  );
}

import { pages } from "./pages";

export default function App({ page }) {
  const Page = pages[page] || pages["not-found"];
  return <Page />;
}

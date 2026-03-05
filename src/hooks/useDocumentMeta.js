import { useEffect } from "react";

export function useDocumentMeta(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

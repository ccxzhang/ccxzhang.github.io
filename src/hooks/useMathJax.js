import { useEffect } from "react";

export function useMathJax(enabled) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const existing = document.getElementById("mathjax-script");
    if (existing) {
      window.MathJax?.typesetPromise?.();
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
    script.onload = () => window.MathJax?.typesetPromise?.();
    document.head.appendChild(script);

    return undefined;
  }, [enabled]);
}

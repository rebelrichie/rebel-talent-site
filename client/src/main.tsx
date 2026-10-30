import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./home-audit.css";
import "./type-system.css";

declare global {
  interface Window {
    __PRERENDER?: boolean;
  }
}

// Fonts load after first paint. Prerender skips this so the saved HTML
// does not keep a render-blocking font stylesheet.
if (!window.__PRERENDER) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/fonts.css";
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);

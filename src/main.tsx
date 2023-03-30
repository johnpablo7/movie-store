import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./routes/App";
import "@fontsource/dosis";
import "@fontsource/red-hat-display";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

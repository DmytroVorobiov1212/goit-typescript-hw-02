// import React from "react";

// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "modern-normalize";
// import App from "./App";
// import "./index.css";

// import Modal from "react-modal";
// Modal.setAppElement("#root");

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root"); // ✅ тільки тут, лише один раз

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

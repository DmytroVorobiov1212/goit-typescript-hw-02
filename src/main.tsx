import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Example } from "./components/Todo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import "hamburgers/_sass/hamburgers/hamburgers.scss";

// React router dom
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

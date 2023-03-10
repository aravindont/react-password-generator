import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// font awesome icon css
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// bootstrap css,js files

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

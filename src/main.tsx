import React from "react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { CustomCursor } from "./components/cursor/custom-cursor.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomCursor />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

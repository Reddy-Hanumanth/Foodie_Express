import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Food_Context from "./Context/Food_Context.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Food_Context>
        <App />
      </Food_Context>
    </BrowserRouter>
  </StrictMode>,
);

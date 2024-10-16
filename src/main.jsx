import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store/index.js";
import ToasterProvider from "./providers/ToasterProvider";
import App from "./App.jsx";
import "@/Assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToasterProvider />
    </Provider>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PixelCursor from "./components/PixelCursor";

createRoot(document.getElementById("root")!).render(
  <>
    <PixelCursor />
    <App />
  </>
);

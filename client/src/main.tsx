import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// set dark theme as default to avoid flash
if (typeof document !== "undefined") {
	document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);

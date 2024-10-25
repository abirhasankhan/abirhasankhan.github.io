// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			{" "}
			{/* Wrap the app in ThemeProvider */}
			<App />
		</ThemeProvider>
	</StrictMode>
);

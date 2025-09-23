import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Portfolio from "./pages/Portfolio";
import Jobakun from "./pages/Jobakun";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					{/* One-page portfolio */}
					<Route index element={<Portfolio />} />

					{/* Full separate page */}
					<Route path="jobakun" element={<Jobakun />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>
);

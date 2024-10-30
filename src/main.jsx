import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	HashRouter as Router, // Use HashRouter for GitHub Pages
	Route,
	Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Skill from "./pages/Skill";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="skill" element={<Skill />} />
						<Route
							path="projects/:id"
							element={<ProjectDetail />}
						/>
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	</StrictMode>
);

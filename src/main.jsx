import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import Skill from "./pages/Skill";

// Define routes
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="projects" element={<Projects />} />
			<Route path="skill" element={<Skill />} />
			<Route path="projects/:id" element={<ProjectDetail />} />
			<Route path="contact" element={<Contact />} />
		</Route>
	)
);

// Render the app
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			{" "}
			{/* Wrap the app in ThemeProvider */}
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Import Navbar here

const App = () => (
	<Router>
		<div>
			<Navbar /> {/* Place Navbar here so it appears on all pages */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectDetail />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	</Router>
);

export default App;

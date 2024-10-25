// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const location = useLocation(); // Get the current location

	// Function to determine if the link is active
	const isActive = (path) => {
		return location.pathname === path ? "text-blue-500 font-bold" : ""; // Highlight active link
	};

	return (
		<nav
			className={`p-4 ${
				theme === "light"
					? "bg-gray-100 text-gray-800"
					: "bg-gray-800 text-white"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">Abir Khan</h1>
				<div className="space-x-4">
					<Link
						to="/"
						className={`hover:text-blue-400 ${isActive("/")}`}
					>
						<b>Home</b>
					</Link>
					<Link
						to="/about"
						className={`hover:text-blue-400 ${isActive("/about")}`}
					>
						<b>About</b>
					</Link>
					<Link
						to="/projects"
						className={`hover:text-blue-400 ${isActive(
							"/projects"
						)}`}
					>
						<b>Projects</b>
					</Link>
					<Link
						to="/contact"
						className={`hover:text-blue-400 ${isActive(
							"/contact"
						)}`}
					>
						<b>Contact</b>
					</Link>
				</div>
				<button
					onClick={toggleTheme}
					className="ml-4 p-2 border rounded hover:bg-blue-400 transition duration-300"
				>
					{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

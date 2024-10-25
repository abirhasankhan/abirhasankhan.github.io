// src/components/Navbar.jsx
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

	const isActive = (path) => {
		return location.pathname === path ? "text-blue-500 font-bold" : ""; // Highlight active link
	};

	return (
		<header className="shadow sticky z-50 top-0">
			<nav
				className={`p-4 ${
					theme === "light"
						? "bg-gray-100 text-gray-800"
						: "bg-gray-800 text-white"
				} shadow sticky top-0 z-50`}
			>
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-xl font-bold">Abir Khan</h1>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-4">
						<Link
							to="/"
							className={`hover:text-blue-400 ${isActive("/")}`}
						>
							<b>Home</b>
						</Link>
						<Link
							to="/about"
							className={`hover:text-blue-400 ${isActive(
								"/about"
							)}`}
						>
							<b>About</b>
						</Link>
						<Link
							to="/skill"
							className={`hover:text-blue-400 ${isActive(
								"/skill"
							)}`}
						>
							<b>Skill</b>
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

					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className="ml-4 p-2 border rounded hover:bg-blue-400 transition duration-300"
					>
						{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
					</button>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden ml-4 p-2 border rounded hover:bg-blue-400 transition duration-300"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? "✖️" : "☰"}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden flex flex-col items-center mt-4 space-y-2">
						<Link
							to="/"
							onClick={() => setIsOpen(false)}
							className={`hover:text-blue-400 ${isActive("/")}`}
						>
							<b>Home</b>
						</Link>
						<Link
							to="/about"
							onClick={() => setIsOpen(false)}
							className={`hover:text-blue-400 ${isActive(
								"/about"
							)}`}
						>
							<b>About</b>
						</Link>
						<Link
							to="/projects"
							onClick={() => setIsOpen(false)}
							className={`hover:text-blue-400 ${isActive(
								"/projects"
							)}`}
						>
							<b>Projects</b>
						</Link>
						<Link
							to="/contact"
							onClick={() => setIsOpen(false)}
							className={`hover:text-blue-400 ${isActive(
								"/contact"
							)}`}
						>
							<b>Contact</b>
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;

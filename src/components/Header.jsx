// Navbar.jsx
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = (path) => location.pathname === path ? "text-blue-500 font-semibold" : "";

	return (
		<header className="shadow-md sticky top-0 z-50">
			<nav
				className={`p-4 transition-colors duration-300 ${
					theme === "light"
						? "bg-white text-gray-800"
						: "bg-gray-900 text-gray-100"
				} shadow-md`}
			>
				<div className="container mx-auto flex justify-between items-center">
					<Logo />

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-6">
						{['/', '/about', '/skill', '/projects', '/contact'].map((path, index) => (
							<Link
								key={index}
								to={path}
								className={`hover:text-blue-400 ${isActive(path)} transition-all duration-300`}
							>
								<b>{path.replace("/", "").toUpperCase() || "HOME"}</b>
							</Link>
						))}
					</div>

					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className="ml-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-400 dark:hover:bg-blue-600 transition-all duration-300"
					>
						{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
					</button>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden ml-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-400 dark:hover:bg-blue-600 transition-all duration-300"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? "✖️" : "☰"}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden flex flex-col items-center mt-4 space-y-2">
						{['/', '/about', '/skill', '/projects', '/contact'].map((path, index) => (
							<Link
								key={index}
								to={path}
								onClick={() => setIsOpen(false)}
								className={`hover:text-blue-400 ${isActive(path)} transition-all duration-300`}
							>
								<b>{path.replace("/", "").toUpperCase() || "HOME"}</b>
							</Link>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;

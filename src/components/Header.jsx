import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navigation = ({
	darkMode,
	toggleDarkMode,
	scrollToSection,
	activeSection,
}) => {
	const [isTyping, setIsTyping] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsTyping(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	const handleNavClick = (section) => {
		scrollToSection(section);
		setMobileMenuOpen(false); // close menu on click
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 border-b-2 backdrop-blur-md transition-all duration-300 ${
				darkMode
					? "bg-gray-900/90 border-green-400"
					: "bg-white/90 border-purple-400"
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<div
						className={`text-xl font-bold font-mono animate-pulse ${
							darkMode ? "text-green-400" : "text-purple-600"
						}`}
					>
						{"<"}ABIR_KHAN{"/>"}{" "}
						{isTyping && <span className="animate-ping">|</span>}
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-6">
						{["hero", "about", "projects", "contact"].map(
							(section) => (
								<button
									key={section}
									onClick={() => handleNavClick(section)}
									className={`transition-all duration-300 font-mono transform hover:scale-110 hover:${
										darkMode
											? "text-cyan-300"
											: "text-pink-600"
									} ${
										activeSection === section
											? darkMode
												? "text-cyan-300 scale-110"
												: "text-pink-600 scale-110"
											: ""
									}`}
								>
									[{section.toUpperCase()}]
								</button>
							)
						)}

						<button
							onClick={toggleDarkMode}
							className={`p-2 rounded-full transition-all transform hover:scale-110 hover:rotate-180 duration-300 ${
								darkMode
									? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
									: "bg-purple-100 text-purple-600 hover:bg-purple-200"
							}`}
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 rounded-md transition ${
								darkMode
									? "text-green-300 hover:bg-gray-800"
									: "text-purple-600 hover:bg-purple-100"
							}`}
						>
							{mobileMenuOpen ? (
								<X size={22} />
							) : (
								<Menu size={22} />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div
						className={`flex flex-col mt-4 space-y-4 md:hidden font-mono ${
							darkMode ? "text-green-300" : "text-purple-700"
						}`}
					>
						{["hero", "about", "projects", "contact"].map(
							(section) => (
								<button
									key={section}
									onClick={() => handleNavClick(section)}
									className={`text-left px-2 py-1 rounded hover:${
										darkMode
											? "bg-gray-800"
											: "bg-purple-100"
									} ${
										activeSection === section
											? "font-bold underline"
											: ""
									}`}
								>
									{section.toUpperCase()}
								</button>
							)
						)}
						<button
							onClick={toggleDarkMode}
							className={`w-fit p-2 rounded-full transition transform hover:scale-110 hover:rotate-180 duration-300 ${
								darkMode
									? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
									: "bg-purple-100 text-purple-600 hover:bg-purple-200"
							}`}
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;

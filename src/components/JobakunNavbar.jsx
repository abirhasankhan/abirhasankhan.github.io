import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const JobakunNavbar = ({
	darkMode,
	toggleDarkMode,
	isMusicPlaying,
	toggleMusic,
}) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsTyping(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 border-b-2 backdrop-blur-md transition-all duration-300 ${
				darkMode
					? "bg-gray-900/90 border-green-400"
					: "bg-white/90 border-purple-400"
			}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
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
					{/* Back to Portfolio */}
					<Link
						to="/"
						className="transition-all duration-300 font-mono hover:text-pink-600 dark:hover:text-green-300"
					>
						PORTFOLIO
					</Link>

					{/* Dark Mode */}
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

					{/* Music Toggle */}
					<button
						onClick={toggleMusic}
						className={`p-2 rounded-full transition-all transform hover:scale-110 duration-300 border ${
							darkMode
								? "border-green-400 text-green-400 hover:bg-green-800"
								: "border-purple-600 text-purple-600 hover:bg-purple-200"
						}`}
						title={isMusicPlaying ? "Pause Music" : "Play Music"}
					>
						{isMusicPlaying ? "🔊" : "🔇"}
					</button>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className={`p-2 rounded-md transition ${
							darkMode
								? "text-green-300 hover:bg-gray-800"
								: "text-purple-600 hover:bg-purple-100"
						}`}
					>
						{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
					<Link
						to="/"
						className="px-2 py-1 rounded hover:bg-purple-100 dark:hover:bg-gray-800"
					>
						PORTFOLIO
					</Link>

					{/* Dark Mode */}
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

					{/* Music Toggle */}
					<button
						onClick={toggleMusic}
						className={`w-fit p-2 rounded-full transition transform hover:scale-110 duration-300 border ${
							darkMode
								? "border-green-400 text-green-400 hover:bg-green-800"
								: "border-purple-600 text-purple-600 hover:bg-purple-200"
						}`}
					>
						{isMusicPlaying ? "🔊 Music On" : "🔇 Music Off"}
					</button>
				</div>
			)}
		</nav>
	);
};

export default JobakunNavbar;

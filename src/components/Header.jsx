import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

const works = [
	{
		name: "Sproz Music Player",
		desc: "WordPress music plugin",
		href: "/#/sproz-music-player",
		emoji: "🎵",
	},
	// Add more works here as you build them
];

const Navigation = ({
	darkMode,
	toggleDarkMode,
	scrollToSection,
	activeSection,
	isMusicPlaying,
	toggleMusic,
}) => {
	const [isTyping, setIsTyping] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [worksOpen, setWorksOpen] = useState(false);
	const [mobileWorksOpen, setMobileWorksOpen] = useState(false);
	const worksRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsTyping(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (worksRef.current && !worksRef.current.contains(e.target)) {
				setWorksOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleNavClick = (section) => {
		scrollToSection(section);
		setMobileMenuOpen(false);
	};

	const accentText = darkMode ? "text-cyan-300" : "text-pink-600";
	const accentHover = darkMode
		? "hover:text-cyan-300"
		: "hover:text-pink-600";

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
					{/* Logo */}
					<div
						className={`text-xl font-bold font-mono animate-pulse ${
							darkMode ? "text-green-400" : "text-purple-600"
						}`}
					>
						{"<"}ABIR_KHAN{"/>"}{" "}
						{isTyping && <span className="animate-ping">|</span>}
					</div>

					{/* ── Desktop Nav ──────────────────────────────────── */}
					<div className="hidden md:flex items-center space-x-6">
						{/* Regular sections */}
						{["hero", "about", "projects", "contact"].map(
							(section) => (
								<button
									key={section}
									onClick={() => handleNavClick(section)}
									className={`transition-all duration-300 font-mono transform hover:scale-110 ${accentHover} ${
										activeSection === section
											? `${accentText} scale-110`
											: ""
									}`}
								>
									[{section.toUpperCase()}]
								</button>
							),
						)}

						{/* Works dropdown */}
						<div ref={worksRef} className="relative">
							<button
								onClick={() => setWorksOpen((o) => !o)}
								className={`flex items-center gap-1 transition-all duration-300 font-mono transform hover:scale-110 ${accentHover} ${
									worksOpen ? `${accentText} scale-110` : ""
								}`}
							>
								[WORKS]
								<ChevronDown
									size={13}
									className={`transition-transform duration-200 ${worksOpen ? "rotate-180" : ""}`}
								/>
							</button>

							{/* Dropdown panel */}
							{worksOpen && (
								<div
									className={`absolute right-0 top-full mt-3 w-56 rounded-xl border shadow-2xl overflow-hidden z-50 transition-all duration-200 ${
										darkMode
											? "bg-gray-900 border-green-400/30 shadow-green-900/30"
											: "bg-white border-purple-200 shadow-purple-100/60"
									}`}
								>
									<div
										className={`px-3 py-2 text-xs font-mono font-bold tracking-widest uppercase ${
											darkMode
												? "text-green-500/60"
												: "text-purple-400/70"
										}`}
									>
										// my works
									</div>
									{works.map((w) => (
										<a
											key={w.href}
											href={w.href}
											onClick={() => setWorksOpen(false)}
											className={`flex items-center gap-3 px-4 py-3 border-t font-mono transition-all duration-200 group ${
												darkMode
													? "border-gray-800 hover:bg-green-400/10 text-gray-300 hover:text-green-300"
													: "border-purple-50 hover:bg-purple-50 text-gray-700 hover:text-pink-600"
											}`}
										>
											<span className="text-lg leading-none">
												{w.emoji}
											</span>
											<div className="min-w-0">
												<div className="text-sm font-bold truncate">
													{w.name}
												</div>
												<div
													className={`text-xs truncate ${
														darkMode
															? "text-gray-500"
															: "text-gray-400"
													}`}
												>
													{w.desc}
												</div>
											</div>
											<span
												className={`ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity ${
													darkMode
														? "text-green-400"
														: "text-pink-500"
												}`}
											>
												→
											</span>
										</a>
									))}
								</div>
							)}
						</div>

						{/* Dark mode toggle */}
						<button
							onClick={toggleDarkMode}
							className={`p-2 rounded-full transition-all transform hover:scale-110 hover:rotate-180 duration-300 ${
								darkMode
									? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
									: "bg-purple-100 text-purple-600 hover:bg-purple-200"
							}`}
							aria-label="Toggle Dark Mode"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>

						{/* Music toggle */}
						<button
							onClick={toggleMusic}
							className={`p-2 rounded-full transition-all transform hover:scale-110 duration-300 border ${
								darkMode
									? "border-green-400 text-green-400 hover:bg-green-800"
									: "border-purple-600 text-purple-600 hover:bg-purple-200"
							}`}
							aria-label={
								isMusicPlaying ? "Pause Music" : "Play Music"
							}
							title={
								isMusicPlaying ? "Pause Music" : "Play Music"
							}
						>
							{isMusicPlaying ? "🔊" : "🔇"}
						</button>
					</div>

					{/* ── Mobile menu button ────────────────────────────── */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 rounded-md transition ${
								darkMode
									? "text-green-300 hover:bg-gray-800"
									: "text-purple-600 hover:bg-purple-100"
							}`}
							aria-label="Toggle Mobile Menu"
						>
							{mobileMenuOpen ? (
								<X size={22} />
							) : (
								<Menu size={22} />
							)}
						</button>
					</div>
				</div>

				{/* ── Mobile Menu ───────────────────────────────────────── */}
				{mobileMenuOpen && (
					<div
						className={`flex flex-col mt-4 space-y-3 md:hidden font-mono ${
							darkMode ? "text-green-300" : "text-purple-700"
						}`}
					>
						{/* Regular sections */}
						{["hero", "about", "projects", "contact"].map(
							(section) => (
								<button
									key={section}
									onClick={() => handleNavClick(section)}
									className={`text-left px-2 py-1 rounded ${
										darkMode
											? "hover:bg-gray-800"
											: "hover:bg-purple-100"
									} ${activeSection === section ? "font-bold underline" : ""}`}
								>
									{section.toUpperCase()}
								</button>
							),
						)}

						{/* Works accordion */}
						<div>
							<button
								onClick={() => setMobileWorksOpen((o) => !o)}
								className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded font-bold ${
									darkMode
										? "hover:bg-gray-800"
										: "hover:bg-purple-100"
								}`}
							>
								WORKS
								<ChevronDown
									size={13}
									className={`transition-transform duration-200 ${mobileWorksOpen ? "rotate-180" : ""}`}
								/>
							</button>
							{mobileWorksOpen && (
								<div
									className={`ml-4 mt-1 border-l-2 pl-3 flex flex-col gap-1 ${
										darkMode
											? "border-green-400/30"
											: "border-purple-200"
									}`}
								>
									{works.map((w) => (
										<a
											key={w.href}
											href={w.href}
											onClick={() =>
												setMobileMenuOpen(false)
											}
											className={`flex items-center gap-2 px-2 py-2 rounded text-sm transition ${
												darkMode
													? "hover:bg-gray-800 text-gray-300 hover:text-green-300"
													: "hover:bg-purple-50 text-gray-700 hover:text-pink-600"
											}`}
										>
											<span>{w.emoji}</span>
											<div>
												<div className="font-bold text-xs">
													{w.name}
												</div>
												<div
													className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
												>
													{w.desc}
												</div>
											</div>
										</a>
									))}
								</div>
							)}
						</div>

						{/* Dark mode toggle */}
						<button
							onClick={toggleDarkMode}
							className={`w-fit p-2 rounded-full transition transform hover:scale-110 hover:rotate-180 duration-300 ${
								darkMode
									? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
									: "bg-purple-100 text-purple-600 hover:bg-purple-200"
							}`}
							aria-label="Toggle Dark Mode"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>

						{/* Music toggle */}
						<button
							onClick={toggleMusic}
							className={`w-fit p-2 rounded-full transition transform hover:scale-110 duration-300 border ${
								darkMode
									? "border-green-400 text-green-400 hover:bg-green-800"
									: "border-purple-600 text-purple-600 hover:bg-purple-200"
							}`}
							aria-label={
								isMusicPlaying ? "Pause Music" : "Play Music"
							}
							title={
								isMusicPlaying ? "Pause Music" : "Play Music"
							}
						>
							{isMusicPlaying ? "🔊 Music On" : "🔇 Music Off"}
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;

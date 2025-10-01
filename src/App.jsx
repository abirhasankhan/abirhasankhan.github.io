import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	// Music state
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);
	const audioRef = useRef(null);

	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	const toggleMusic = () => {
		if (!audioRef.current) return;
		if (isMusicPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play().catch((error) => {
				console.log("Play failed:", error);
			});
		}
		setIsMusicPlaying(!isMusicPlaying);
	};
	  

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		setActiveSection(sectionId);
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className={`flex flex-col min-h-screen transition-all duration-500 ${
				darkMode
					? "bg-gray-900 text-green-400"
					: "bg-amber-50 text-purple-900"
			}`}
		>
			<Navigation
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				scrollToSection={scrollToSection}
				activeSection={activeSection}
				isMusicPlaying={isMusicPlaying}
				toggleMusic={toggleMusic}
			/>

			<div className="flex-grow">
				<Outlet context={{ darkMode, toggleDarkMode }} />
			</div>

			<Footer darkMode={darkMode} />

			{/* Hidden audio player */}
			<audio
				ref={audioRef}
				src="/genshin-main-theme.mp3"
				loop
				preload="auto"
			/>
		</div>
	);
}

export default App;

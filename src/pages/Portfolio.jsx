// pages/Portfolio.jsx
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import FireflyLayer from "../components/FireflyLayer";

const Portfolio = () => {
	const { darkMode } = useOutletContext();
	const [activeSection, setActiveSection] = useState("hero");
	const [firefliesOn, setFirefliesOn] = useState(true);
	const [firefliesCount, setFirefliesCount] = useState(20);

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
			className={`min-h-screen transition-all duration-500 ${
				darkMode
					? "bg-gray-900 text-green-400"
					: "bg-amber-50 text-purple-900"
			}`}
		>
			{/* Firefly Toggle */}
			{/* <button
				className="fixed top-4 right-4 z-50 px-4 py-2 text-xs font-semibold rounded bg-black/50 text-white"
				onClick={() => setFirefliesOn((prev) => !prev)}
			>
				{firefliesOn
					? "Catch All Fireflies 🪰"
					: "Release Fireflies ✨"}
			</button> */}

			{/* Firefly Count */}
			{/* <p className="fixed top-4 left-4 z-50 bg-black/40 px-3 py-1 text-white text-xs rounded">
				🪰 Fireflies caught: {20 - firefliesCount}
			</p> */}

			{/* Fireflies */}
			<FireflyLayer
				darkMode={darkMode}
				enabled={firefliesOn}
				onUpdateCount={(count) => setFirefliesCount(count)}
			/>

			{/* Retro Grid Background */}
			<div className="fixed inset-0 opacity-10 pointer-events-none">
				<div
					className={`w-full h-full ${
						darkMode
							? "bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900"
							: "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400"
					}`}
					style={{
						backgroundImage: `linear-gradient(${
							darkMode ? "#10b981" : "#8b5cf6"
						} 1px, transparent 1px), linear-gradient(90deg, ${
							darkMode ? "#10b981" : "#8b5cf6"
						} 1px, transparent 1px)`,
						backgroundSize: "50px 50px",
					}}
				></div>
			</div>

			<HeroSection
				darkMode={darkMode}
				scrollToSection={scrollToSection}
			/>
			<AboutSection darkMode={darkMode} />
			<ProjectsSection darkMode={darkMode} />
			<ContactSection darkMode={darkMode} />

			<style jsx>{`
				@keyframes slideIn {
					from {
						width: 0%;
					}
					to {
						width: var(--target-width);
					}
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fadeIn 1s ease-out;
				}
			`}</style>
		</div>
	);
};

export default Portfolio;

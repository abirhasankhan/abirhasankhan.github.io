import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = ({ darkMode, scrollToSection }) => {
	const fullName = "MD. ABIR HASAN KHAN";
	const [displayName, setDisplayName] = useState("");
	const [titleIndex, setTitleIndex] = useState(0);

	const titles = [
		"[CODE SAMURAI] • [LEVEL 99] • [FULL-STACK ARTIFICER]",
		"[GAME DEVELOPER] • [VR ENTHUSIAST] • [TECH INNOVATOR]",
		"[BACKEND WIZARD] • [FRONTEND NINJA] • [DATABASE MASTER]",
	];

	useEffect(() => {
		let i = 0;
		const nameTimer = setInterval(() => {
			if (i < fullName.length) {
				setDisplayName(fullName.slice(0, i + 1));
				i++;
			} else {
				clearInterval(nameTimer);
			}
		}, 100);

		const titleTimer = setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 4000);

		return () => {
			clearInterval(nameTimer);
			clearInterval(titleTimer);
		};
	}, []);

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden"
		>
			{/* Animated Particles */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className={`absolute w-2 h-2 ${
							darkMode ? "bg-green-400" : "bg-purple-400"
						} rounded-full animate-ping`}
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 2}s`,
							animationDuration: `${2 + Math.random() * 3}s`,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-4 text-center relative z-10">
				<div
					className={`inline-block w-full md:max-w-4xl p-6 rounded-lg mx-auto mb-8 border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 shadow-2xl ${
						darkMode
							? "bg-gray-800/50 border-green-400"
							: "bg-white/50 border-purple-400"
					}`}
				>
					{/* Title + Role */}
					<div
						className={`text-sm font-mono mb-2 animate-bounce ${
							darkMode ? "text-green-300" : "text-purple-600"
						}`}
					>
						༒ PLAYER STATUS ༒
					</div>
					<h1
						className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-mono mb-4 ${
							darkMode ? "text-green-400" : "text-purple-800"
						}`}
					>
						{displayName}
						<span className="animate-pulse">|</span>
					</h1>
					<div
						className={`text-md sm:text-xl md:text-2xl font-mono mb-4 animate-pulse ${
							darkMode ? "text-cyan-300" : "text-pink-600"
						}`}
					>
						{titles[titleIndex]}
					</div>

					{/* Description */}
					<p
						className={`text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 animate-fade-in ${
							darkMode ? "text-gray-300" : "text-gray-700"
						}`}
					>
						A highly motivated software and game developer wielding
						expertise in full-stack development, game design, and
						emerging technologies. Ready to embark on the next
						quest!
					</p>

					{/* Skills/Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
						{[
							{
								label: "BACKEND",
								percent: 80,
								color: darkMode
									? "bg-green-400"
									: "bg-purple-500",
							},
							{
								label: "FRONTEND",
								percent: 90,
								color: darkMode ? "bg-cyan-400" : "bg-pink-500",
							},
							{
								label: "GAME DEV",
								percent: 50,
								color: darkMode
									? "bg-purple-400"
									: "bg-indigo-500",
							},
						].map((stat, index) => (
							<div
								key={stat.label}
								className={`p-4 rounded transform hover:scale-105 transition duration-300 ${
									darkMode
										? "bg-gray-700/50"
										: "bg-purple-100/50"
								}`}
							>
								<div
									className={`font-mono text-sm ${
										darkMode
											? "text-green-300"
											: "text-purple-600"
									}`}
								>
									{stat.label}
								</div>
								<div
									className={`w-full h-2 mt-1 rounded overflow-hidden ${
										darkMode ? "bg-gray-600" : "bg-gray-300"
									}`}
								>
									<div
										className={`${stat.color} h-2 rounded`}
										style={{
											width: `${stat.percent}%`,
											transition: "width 2s ease-out",
										}}
									/>
								</div>
								<div
									className={`text-xs mt-1 font-mono ${
										darkMode
											? "text-gray-400"
											: "text-gray-600"
									}`}
								>
									{stat.percent}%
								</div>
							</div>
						))}
					</div>

					{/* Buttons */}
					<div className="flex flex-wrap justify-center gap-4">
						{[
							{
								href: "https://github.com/abirhasankhan",
								icon: Github,
								text: "[GITHUB]",
								color: darkMode
									? "text-green-400"
									: "text-white",
							},
							{
								href: "https://linkedin.com/in/mdabirhasankhan",
								icon: Linkedin,
								text: "[LINKEDIN]",
								color: darkMode
									? "text-cyan-400"
									: "text-white",
							},
							{
								action: () => scrollToSection("contact"),
								icon: Mail,
								text: "[CONTACT]",
								color: darkMode
									? "text-purple-400"
									: "text-white",
							},
						].map((btn, index) => (
							<a
								key={index}
								href={btn.href}
								onClick={btn.action}
								target={btn.href ? "_blank" : undefined}
								rel={
									btn.href ? "noopener noreferrer" : undefined
								}
								className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg font-mono transition transform hover:scale-110 hover:rotate-3 duration-300 ${
									darkMode
										? "bg-gray-700 hover:bg-gray-600"
										: "bg-purple-600 hover:bg-purple-700"
								} ${btn.color}`}
							>
								<btn.icon
									className="mr-2 animate-pulse"
									size={18}
								/>
								{btn.text}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

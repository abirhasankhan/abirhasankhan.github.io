import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ darkMode }) => {
	const currentYear = new Date().getFullYear();

	const launchDate = new Date("2024-10-01T00:00:00Z");

	const [timeZone, setTimeZone] = useState("UTC");
	const [uptime, setUptime] = useState("");
	const [currentTime, setCurrentTime] = useState("");
	const [currentDate, setCurrentDate] = useState("");

	useEffect(() => {
		// Detect user timezone once on mount
		const detectedTimeZone =
			Intl.DateTimeFormat().resolvedOptions().timeZone;
		setTimeZone(detectedTimeZone || "UTC");

		const updateUptime = () => {
			const now = new Date();
			const diff = now - launchDate;

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((diff / (1000 * 60)) % 60);
			const seconds = Math.floor((diff / 1000) % 60);

			setUptime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
		};

		const updateCurrentTimeAndDate = () => {
			const now = new Date();

			const timeString = now.toLocaleTimeString("en-US", {
				timeZone,
				hour12: false,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			});

			const dateString = now.toLocaleDateString("en-US", {
				timeZone,
				weekday: "short",
				year: "numeric",
				month: "short",
				day: "numeric",
			});

			setCurrentTime(timeString);
			setCurrentDate(dateString);
		};

		updateUptime();
		updateCurrentTimeAndDate();

		const interval = setInterval(() => {
			updateUptime();
			updateCurrentTimeAndDate();
		}, 1000);

		return () => clearInterval(interval);
	}, [launchDate, timeZone]);

	return (
		<footer
			className={`py-8 ${
				darkMode ? "border-green-400" : "border-purple-400"
			} border-t-2`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div
					className={`${
						darkMode ? "text-gray-400" : "text-gray-600"
					} font-mono animate-pulse text-sm sm:text-base`}
				>
					© {currentYear} MD. Abir Hasan Khan • Code Samurai • Level
					99 Developer
				</div>

				<div
					className={`${
						darkMode ? "text-gray-500" : "text-gray-500"
					} font-mono text-xs mt-2`}
				>
					Crafted with ⚡ React & 🎨 Tailwind CSS • Gaming Theme
					Activated
				</div>

				<div
					className={`${
						darkMode ? "text-green-400" : "text-purple-600"
					} font-mono text-xs mt-1`}
				>
					Uptime: {uptime}
				</div>

				<div
					className={`${
						darkMode ? "text-green-400" : "text-purple-600"
					} font-mono text-xs mt-1`}
				>
					Current Date ({timeZone}): {currentDate}
				</div>

				<div
					className={`${
						darkMode ? "text-green-400" : "text-purple-600"
					} font-mono text-xs mt-1`}
				>
					Current Time ({timeZone}): {currentTime}
				</div>

				<div className="flex justify-center flex-wrap gap-4 mt-4">
					<a
						href="https://github.com/abirhasankhan"
						target="_blank"
						rel="noopener noreferrer"
						className={`${
							darkMode
								? "text-green-400 hover:text-cyan-300"
								: "text-purple-600 hover:text-pink-600"
						} transition-all transform hover:scale-125 hover:rotate-12`}
					>
						<Github size={20} />
					</a>
					<a
						href="https://linkedin.com/in/mdabirhasankhan"
						target="_blank"
						rel="noopener noreferrer"
						className={`${
							darkMode
								? "text-green-400 hover:text-cyan-300"
								: "text-purple-600 hover:text-pink-600"
						} transition-all transform hover:scale-125 hover:rotate-12`}
					>
						<Linkedin size={20} />
					</a>
					<a
						href="mailto:ak99.abirkhan@gmail.com"
						className={`${
							darkMode
								? "text-green-400 hover:text-cyan-300"
								: "text-purple-600 hover:text-pink-600"
						} transition-all transform hover:scale-125 hover:rotate-12`}
					>
						<Mail size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

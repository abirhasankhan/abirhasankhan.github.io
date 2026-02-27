import {
	Mail,
	Phone,
	MapPin,
	Code,
	Database,
	Gamepad2,
	Monitor,
	Globe,
	Briefcase,
	ChevronDown,
	ChevronUp,
	Star,
} from "lucide-react";
import { useState } from "react";

const experienceTimeline = [
	{
		company: "XIIA",
		location: "Denmark · Remote",
		roles: [
			{
				title: "Junior Developer",
				type: "Full-time",
				duration: "March 2026 - Present",
			},
			{
				title: "Web Development Intern",
				type: "Internship",
				duration: "October 2025 - February 2026",
			},
		],
		summary:
			"Developing custom web solutions, implementing frontend interfaces and backend business logic for multiple international client projects.",
		highlights: [
			{
				category: "Custom WordPress Development",
				points: [
					"Developed custom WordPress plugins for internal and client platforms.",
					"Built a custom LatePoint appointment tracking plugin for Steamgreen, Stemfox, and B&C.",
					"Modified and extended LatePoint widgets to meet advanced business logic requirements.",
				],
			},
			{
				category: "Soundmade Platform",
				points: [
					"Implemented a custom authentication system.",
					"Developed role-based video access control.",
					"Customized backend permission logic for content protection.",
				],
			},
			{
				category: "WeWave Platform",
				points: [
					"Built landing page and contact page.",
					"Customized WordPress plugins and frontend layouts.",
					"Contributed to backend functionality and production deployment.",
				],
			},
			{
				category: "Maintenance & QA",
				points: [
					"Updated WordPress core and plugins.",
					"Performed full-site testing before deployment.",
					"Reported bugs and ensured performance stability.",
				],
			},
		],
	},
	{
		company: "Liveincodes",
		location: "Uttara, Dhaka, Bangladesh · Remote",
		roles: [
			{
				title: "Software Engineer",
				type: "Full-time",
				duration: "March 2025 - August 2025",
			},
		],
		summary:
			"Full-stack Software Engineer building and delivering production-grade web applications from scratch in a fully remote Agile environment.",
		highlights: [
			{
				category: "Rickshawandco.com",
				points: [
					"Built restaurant website using Nuxt.js, Tailwind CSS, and Sanity CMS.",
					"Implemented responsive UI and CMS integration.",
					"Deployed production-ready platform on DigitalOcean.",
				],
			},
			{
				category: "Rajaranirestaurant.com",
				points: [
					"Developed SEO-optimized, high-performance restaurant website.",
					"Focused on speed optimization and UX improvements.",
				],
			},
			{
				category: "AmarReview (PWA)",
				points: [
					"Designed and built full-stack Progressive Web App.",
					"Developed frontend, backend APIs, and admin panel using Nuxt.js and Supabase.",
					"Implemented authentication, database architecture, and production deployment.",
				],
			},
			{
				category: "Engineering Contributions",
				points: [
					"Implemented CI/CD pipelines and Git workflows.",
					"Ensured scalability and performance optimization.",
					"Collaborated with cross-functional teams while owning production modules.",
				],
			},
		],
	},
	{
		company: "Crystal Composite Ltd",
		location: "Ashulia, Bangladesh · Hybrid",
		roles: [
			{
				title: "Software Engineer & Team Lead",
				type: "Full-time",
				duration: "December 2024 - February 2025",
			},
		],
		summary:
			"Led the development of the company's first in-house automated Dyeing ERP system, replacing Excel-based workflows.",
		highlights: [
			{
				category: "Leadership & Requirement Engineering",
				points: [
					"Conducted interviews with factory staff and workers.",
					"Documented workflows and prepared technical specifications.",
				],
			},
			{
				category: "System Architecture",
				points: [
					"Designed database architecture using PostgreSQL and Drizzle ORM.",
					"Built full-stack ERP using Node.js, Express, React, and Chakra UI.",
					"Deployed system on VPS infrastructure.",
				],
			},
			{
				category: "Impact",
				points: [
					"Delivered Alpha release improving process tracking and data accuracy.",
					"Owned complete Software Development Life Cycle (SDLC).",
				],
			},
		],
	},
];

const ExperienceCard = ({ exp, index, darkMode }) => {
	const [expanded, setExpanded] = useState(false);

	const isCurrentJob = exp.roles.some((r) => r.duration.includes("Present"));

	return (
		<div className="relative flex gap-4 md:gap-6">
			{/* Timeline line + node */}
			<div className="flex flex-col items-center">
				<div
					className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 ${
						isCurrentJob
							? darkMode
								? "bg-green-400 border-green-300 shadow-[0_0_12px_#4ade80]"
								: "bg-purple-600 border-purple-400 shadow-[0_0_12px_#9333ea]"
							: darkMode
								? "bg-gray-800 border-green-400"
								: "bg-white border-purple-400"
					}`}
				>
					{isCurrentJob ? (
						<Star
							size={16}
							className={
								darkMode ? "text-gray-900" : "text-white"
							}
							fill="currentColor"
						/>
					) : (
						<Briefcase
							size={16}
							className={
								darkMode ? "text-green-400" : "text-purple-600"
							}
						/>
					)}
				</div>
				{index < experienceTimeline.length - 1 && (
					<div
						className={`w-0.5 flex-1 mt-1 ${
							darkMode
								? "bg-gradient-to-b from-green-400/60 to-green-400/10"
								: "bg-gradient-to-b from-purple-400/60 to-purple-400/10"
						}`}
						style={{ minHeight: "40px" }}
					/>
				)}
			</div>

			{/* Card */}
			<div
				className={`flex-1 mb-10 p-5 rounded-lg border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${
					darkMode
						? "bg-gray-800/50 border-green-400/70 hover:border-green-300"
						: "bg-white/50 border-purple-400/70 hover:border-purple-500"
				} ${isCurrentJob ? (darkMode ? "shadow-[0_0_20px_#4ade8030]" : "shadow-[0_0_20px_#9333ea20]") : ""}`}
			>
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
					<div>
						<div className="flex items-center gap-2 flex-wrap">
							<h4
								className={`text-xl font-bold font-mono ${
									darkMode
										? "text-green-300"
										: "text-purple-700"
								}`}
							>
								{exp.company}
							</h4>
							{isCurrentJob && (
								<span
									className={`text-xs font-mono px-2 py-0.5 rounded border animate-pulse ${
										darkMode
											? "bg-green-400/20 border-green-400 text-green-300"
											: "bg-purple-100 border-purple-500 text-purple-700"
									}`}
								>
									● ACTIVE
								</span>
							)}
						</div>
						<div
							className={`text-sm font-mono mt-0.5 ${
								darkMode ? "text-gray-400" : "text-gray-500"
							}`}
						>
							<MapPin size={12} className="inline mr-1" />
							{exp.location}
						</div>
					</div>
				</div>

				{/* Roles */}
				<div className="mb-3 space-y-1.5">
					{exp.roles.map((role, i) => (
						<div
							key={i}
							className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 py-2 rounded border ${
								darkMode
									? "bg-gray-700/50 border-green-400/30"
									: "bg-purple-50/70 border-purple-300/50"
							}`}
						>
							<div className="flex items-center gap-2">
								<span
									className={`font-bold font-mono text-sm ${
										darkMode
											? "text-cyan-300"
											: "text-pink-600"
									}`}
								>
									{role.title}
								</span>
								<span
									className={`text-xs px-1.5 py-0.5 rounded font-mono ${
										darkMode
											? "bg-gray-600 text-gray-300"
											: "bg-purple-100 text-purple-600"
									}`}
								>
									{role.type}
								</span>
							</div>
							<span
								className={`text-xs font-mono mt-1 sm:mt-0 ${
									darkMode ? "text-gray-400" : "text-gray-500"
								}`}
							>
								{role.duration}
							</span>
						</div>
					))}
				</div>

				{/* Summary */}
				<p
					className={`text-sm mb-4 leading-relaxed ${
						darkMode ? "text-gray-300" : "text-gray-700"
					}`}
				>
					{exp.summary}
				</p>

				{/* Expand/Collapse Button */}
				<button
					onClick={() => setExpanded(!expanded)}
					className={`flex items-center gap-2 text-sm font-mono font-bold transition-all duration-300 hover:scale-105 ${
						darkMode
							? "text-green-400 hover:text-cyan-300"
							: "text-purple-600 hover:text-pink-600"
					}`}
				>
					{expanded ? (
						<>
							<ChevronUp size={16} /> [HIDE QUEST LOG]
						</>
					) : (
						<>
							<ChevronDown size={16} /> [VIEW QUEST LOG]
						</>
					)}
				</button>

				{/* Highlights (expandable) */}
				{expanded && (
					<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
						{exp.highlights.map((h, hi) => (
							<div
								key={hi}
								className={`p-3 rounded border ${
									darkMode
										? "bg-gray-900/60 border-green-400/20"
										: "bg-white/80 border-purple-200"
								}`}
							>
								<div
									className={`text-xs font-bold font-mono mb-2 uppercase ${
										darkMode
											? "text-cyan-400"
											: "text-pink-600"
									}`}
								>
									▸ {h.category}
								</div>
								<ul className="space-y-1">
									{h.points.map((pt, pi) => (
										<li
											key={pi}
											className={`text-xs font-mono leading-relaxed flex gap-1.5 ${
												darkMode
													? "text-gray-300"
													: "text-gray-600"
											}`}
										>
											<span
												className={
													darkMode
														? "text-green-500"
														: "text-purple-400"
												}
											>
												›
											</span>
											{pt}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

const AboutSection = ({ darkMode }) => {
	const skills = {
		programming: [
			"Java",
			"C",
			"C++",
			"C#",
			"JavaScript",
			"TypeScript",
			"Python",
			"PHP",
		],
		web: [
			"ReactJS",
			"VueJS",
			"Nuxt.js",
			"NodeJS",
			"Express.js",
			"HTML",
			"CSS",
		],
		databases: ["PostgreSQL", "MySQL", "NoSQL", "MongoDB"],
		tools: ["Unity", "Android", "Docker", "GitHub", "CI/CD"],
		gamedev: ["Unity", "Game Design", "VR Development", "3D Graphics"],
	};

	return (
		<section id="about" className="py-20 px-4">
			<div className="container mx-auto">
				<h2
					className={`text-4xl font-bold text-center mb-12 ${
						darkMode ? "text-green-400" : "text-purple-800"
					} font-mono animate-bounce`}
				>
					༒ CHARACTER PROFILE ༒
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Personal Info */}
					<div
						className={`p-6 rounded-lg ${
							darkMode
								? "bg-gray-800/50 border-green-400"
								: "bg-white/50 border-purple-400"
						} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500`}
					>
						<h3
							className={`text-2xl font-bold mb-4 ${
								darkMode ? "text-cyan-300" : "text-pink-600"
							} font-mono`}
						>
							[BASIC INFO]
						</h3>
						<div className="space-y-3">
							{[
								{ icon: MapPin, text: "Dhaka, Bangladesh" },
								{ icon: Phone, text: "+8801955223121" },
								{ icon: Mail, text: "ak99.abirkhan@gmail.com" },
								{
									icon: Globe,
									text: "Portfolio Website",
									link: "https://abirhasankhan.github.io",
								},
							].map((item, index) => (
								<div
									key={index}
									className="flex items-center group"
								>
									<item.icon
										className={`mr-3 ${
											darkMode
												? "text-green-400"
												: "text-purple-600"
										} group-hover:animate-pulse`}
										size={18}
									/>
									{item.link ? (
										<a
											href={item.link}
											className={`font-mono hover:${
												darkMode
													? "text-cyan-300"
													: "text-pink-600"
											} transition-colors`}
										>
											{item.text}
										</a>
									) : (
										<span className="font-mono">
											{item.text}
										</span>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Education */}
					<div
						className={`p-6 rounded-lg ${
							darkMode
								? "bg-gray-800/50 border-green-400"
								: "bg-white/50 border-purple-400"
						} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500`}
					>
						<h3
							className={`text-2xl font-bold mb-4 ${
								darkMode ? "text-cyan-300" : "text-pink-600"
							} font-mono`}
						>
							[EDUCATION]
						</h3>
						<div className="space-y-4">
							{[
								{
									degree: "Bachelor of Science in CSE",
									school: "East West University (2019-2024)",
									gpa: "CGPA: 3.06",
								},
								{
									degree: "HSC (Science)",
									school: "Govt. Science College (2016-2018)",
									gpa: "GPA: 3.03",
								},
							].map((edu, index) => (
								<div key={index} className="group">
									<div
										className={`font-bold ${
											darkMode
												? "text-green-300"
												: "text-purple-700"
										} group-hover:animate-pulse transform hover:scale-105 transition-transform`}
									>
										{edu.degree}
									</div>
									<div
										className={`${
											darkMode
												? "text-gray-300"
												: "text-gray-700"
										} font-mono`}
									>
										{edu.school}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Skills Grid */}
				<div className="mb-12">
					<h3
						className={`text-3xl font-bold text-center mb-8 ${
							darkMode ? "text-green-400" : "text-purple-800"
						} font-mono animate-pulse`}
					>
						⚔️ SKILL ARSENAL ⚔️
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Object.entries(skills).map(
							([category, skillList], index) => (
								<div
									key={category}
									className={`p-6 rounded-lg ${
										darkMode
											? "bg-gray-800/50 border-green-400"
											: "bg-white/50 border-purple-400"
									} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
								>
									<div
										className={`flex items-center mb-4 ${
											darkMode
												? "text-cyan-300"
												: "text-pink-600"
										}`}
									>
										{category === "programming" && (
											<Code
												size={20}
												className="animate-pulse"
											/>
										)}
										{category === "web" && (
											<Monitor
												size={20}
												className="animate-pulse"
											/>
										)}
										{category === "databases" && (
											<Database
												size={20}
												className="animate-pulse"
											/>
										)}
										{category === "tools" && (
											<Globe
												size={20}
												className="animate-pulse"
											/>
										)}
										{category === "gamedev" && (
											<Gamepad2
												size={20}
												className="animate-pulse"
											/>
										)}
										<h4 className="ml-2 font-bold text-lg font-mono uppercase">
											[{category}]
										</h4>
									</div>
									<div className="flex flex-wrap gap-2">
										{skillList.map((skill) => (
											<span
												key={skill}
												className={`px-3 py-1 rounded text-sm font-mono ${
													darkMode
														? "bg-gray-700 text-green-300 border-green-400"
														: "bg-purple-100 text-purple-700 border-purple-300"
												} border transform hover:scale-110 transition-all duration-300 cursor-default`}
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							),
						)}
					</div>
				</div>

				{/* Experience Timeline */}
				<div>
					<h3
						className={`text-3xl font-bold text-center mb-10 ${
							darkMode ? "text-green-400" : "text-purple-800"
						} font-mono animate-bounce`}
					>
						🏆 WORK EXPERIENCE 🏆
					</h3>

					{/* Timeline */}
					<div className="w-full">
						{experienceTimeline.map((exp, index) => (
							<ExperienceCard
								key={index}
								exp={exp}
								index={index}
								darkMode={darkMode}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

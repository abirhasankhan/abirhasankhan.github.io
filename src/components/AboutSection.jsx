import {
	Mail,
	Phone,
	MapPin,
	Code,
	Database,
	Gamepad2,
	Monitor,
	Globe,
} from "lucide-react";

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

	const experience = [
		{
			company: "Liveincodes",
			position: "Software Engineer",
			duration: "March 2025 - Present",
			type: "Full-time",
			description:
				"Contributing to Software Development Department remotely, writing clean maintainable code and collaborating with cross-functional teams.",
		},
		{
			company: "Crystal Composite Ltd",
			position: "Software Engineer & Team Lead",
			duration: "December 2024 - March 2025",
			type: "Full-time",
			description:
				"Led development of Dyeing ERP system, spearheaded full-stack development, and managed entire SDLC from planning to production.",
		},
	];

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
									link: "https://abirhasankhan.github.io/portfolio",
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
									{/* <div
										className={`${
											darkMode
												? "text-gray-400"
												: "text-gray-600"
										} text-sm font-mono`}
									>
										{edu.gpa}
									</div> */}
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
										{skillList.map((skill, skillIndex) => (
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
							)
						)}
					</div>
				</div>

				{/* Experience */}
				<div>
					<h3
						className={`text-3xl font-bold text-center mb-8 ${
							darkMode ? "text-green-400" : "text-purple-800"
						} font-mono animate-bounce`}
					>
						🏆 WORK EXPERIENCE 🏆
					</h3>
					<div className="space-y-6">
						{experience.map((exp, index) => (
							<div
								key={index}
								className={`p-6 rounded-lg ${
									darkMode
										? "bg-gray-800/50 border-green-400"
										: "bg-white/50 border-purple-400"
								} border-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
							>
								<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
									<div>
										<h4
											className={`text-xl font-bold ${
												darkMode
													? "text-green-300"
													: "text-purple-700"
											} font-mono hover:animate-pulse`}
										>
											{exp.position}
										</h4>
										<div
											className={`${
												darkMode
													? "text-cyan-300"
													: "text-pink-600"
											} font-mono`}
										>
											{exp.company}
										</div>
									</div>
									<div
										className={`${
											darkMode
												? "text-gray-400"
												: "text-gray-600"
										} font-mono text-sm mt-2 md:mt-0`}
									>
										{exp.duration} • {exp.type}
									</div>
								</div>
								<p
									className={`${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									}`}
								>
									{exp.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

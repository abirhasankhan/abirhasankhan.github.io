import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects.js"; // Adjust path accordingly

const ProjectsSection = ({ darkMode }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openProjectModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeProjectModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedProject(null), 300);
	};

	return (
		<>
			<section id="projects" className="py-20 px-4">
				<div className="container mx-auto">
					<h2
						className={`text-4xl font-bold text-center mb-12 ${
							darkMode ? "text-green-400" : "text-purple-800"
						} font-mono animate-pulse`}
					>
						⚡ PROJECT GALLERY ⚡
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project, index) => (
							<div
								key={project.id}
								onClick={() => openProjectModal(project)}
								className={`p-6 rounded-lg ${
									darkMode
										? "bg-gray-800/50 border-green-400 hover:bg-gray-700/50"
										: "bg-white/50 border-purple-400 hover:bg-white/70"
								} border-2 backdrop-blur-sm transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer group`}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{/* Since your project data no longer has category/year/tech, you can omit or adapt these */}

								<h3
									className={`text-xl font-bold mb-3 ${
										darkMode
											? "text-cyan-300"
											: "text-pink-600"
									} font-mono group-hover:animate-pulse`}
								>
									{project.title}
								</h3>

								<p
									className={`${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									} mb-4 text-sm`}
								>
									{project.description}
								</p>

								{/* Optional: Display images count or thumbnails */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.images &&
										project.images
											.slice(0, 3)
											.map((img, i) => (
												<img
													key={i}
													src={img}
													alt={`${
														project.title
													} screenshot ${i + 1}`}
													className="w-16 h-12 rounded object-cover border border-gray-300"
												/>
											))}
									{project.images &&
										project.images.length > 3 && (
											<span
												className={`px-2 py-1 rounded text-xs font-mono ${
													darkMode
														? "bg-gray-700 text-gray-300"
														: "bg-gray-100 text-gray-700"
												}`}
											>
												+{project.images.length - 3}{" "}
												more
											</span>
										)}
								</div>

								<div
									className={`flex items-center justify-between ${
										darkMode
											? "text-green-400"
											: "text-purple-600"
									}`}
								>
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()} // prevent modal open when clicking link
										className="font-mono text-sm flex items-center gap-1 group-hover:animate-pulse"
									>
										View Code
										<ExternalLink
											size={16}
											className="group-hover:animate-bounce"
										/>
									</a>

									<span className="font-mono text-sm group-hover:animate-pulse cursor-pointer">
										[CLICK TO VIEW]
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={closeProjectModal}
				darkMode={darkMode}
			/>
		</>
	);
};

export default ProjectsSection;

import React, { useState } from "react";
import {
	Github,
	Calendar,
	Code,
	Gamepad2,
	Smartphone,
	Globe,
	ExternalLink,
	Download,
	X,
	Play,
	Star,
	Eye,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
	exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const ProjectModal = ({ project, isOpen, onClose, darkMode }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!isOpen || !project) return null;

	const images = project.images || [];

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? images.length - 1 : prev - 1
		);
	};

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === images.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="modal-backdrop"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
				>
					<motion.div
						key="modal-container"
						className={`container max-w-4xl w-full max-h-[90vh] rounded-lg ${
							darkMode
								? "bg-gray-900 border-green-400"
								: "bg-white border-purple-400"
						} border-2 shadow-2xl flex flex-col`}
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						{/* Header */}
						<div className="flex justify-between items-center p-6 border-b border-current flex-shrink-0">
							<h2
								className={`text-2xl font-bold ${
									darkMode
										? "text-green-400"
										: "text-purple-800"
								} font-mono`}
							>
								{project.title}
							</h2>
							<button
								onClick={() => {
									onClose();
									setCurrentImageIndex(0);
								}}
								className={`p-2 rounded-full ${
									darkMode
										? "hover:bg-gray-800 text-red-400"
										: "hover:bg-gray-100 text-red-600"
								} transition-all duration-300 transform hover:scale-110 hover:rotate-90`}
								aria-label="Close modal"
							>
								<X size={24} />
							</button>
						</div>

						{/* Scrollable content */}
						<div
							className="p-4 sm:p-6 overflow-y-auto"
							style={{ maxHeight: "calc(90vh - 72px)" }}
						>
							{/* Image Slider */}
							<div
								className={`w-full h-64 sm:h-80 rounded-lg mb-6 relative flex items-center justify-center ${
									darkMode
										? "bg-gray-800 border-green-400"
										: "bg-gray-100 border-purple-400"
								} border-2 overflow-hidden`}
							>
								{images.length > 0 ? (
									<>
										<img
											src={images[currentImageIndex]}
											alt={`${project.title} screenshot ${
												currentImageIndex + 1
											}`}
											className="object-contain max-h-full max-w-full rounded-lg select-none"
											draggable={false}
										/>
										{/* Navigation Buttons */}
										{images.length > 1 && (
											<>
												<button
													onClick={prevImage}
													className={`absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-black bg-opacity-40 text-white hover:bg-opacity-70 transition`}
													aria-label="Previous image"
												>
													<ChevronLeft size={24} />
												</button>
												<button
													onClick={nextImage}
													className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-black bg-opacity-40 text-white hover:bg-opacity-70 transition`}
													aria-label="Next image"
												>
													<ChevronRight size={24} />
												</button>
											</>
										)}
									</>
								) : (
									<div
										className={`text-5xl sm:text-6xl ${
											darkMode
												? "text-green-400"
												: "text-purple-400"
										} animate-pulse flex items-center justify-center w-full h-full`}
									>
										{/* fallback icon */}
										{project.category === "VR/Gaming" && (
											<Gamepad2 />
										)}
										{project.category === "Full-Stack" && (
											<Code />
										)}
										{project.category === "Mobile" && (
											<Smartphone />
										)}
										{project.category === "Gaming" && (
											<Play />
										)}
										{project.category === "Web" && (
											<Globe />
										)}
									</div>
								)}
							</div>

							{/* Project Details */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div>
									<h3
										className={`text-xl font-bold mb-4 ${
											darkMode
												? "text-cyan-300"
												: "text-pink-600"
										} font-mono`}
									>
										[PROJECT INFO]
									</h3>
									<div className="space-y-3">
										<div className="flex items-center">
											<Calendar
												className={`mr-3 ${
													darkMode
														? "text-green-400"
														: "text-purple-600"
												}`}
												size={18}
											/>
											<span className="font-mono">
												{project.year}
											</span>
										</div>
										<div className="flex items-center">
											<Star
												className={`mr-3 ${
													darkMode
														? "text-green-400"
														: "text-purple-600"
												}`}
												size={18}
											/>
											<span className="font-mono">
												{project.category}
											</span>
										</div>
										<div className="flex items-center">
											<Eye
												className={`mr-3 ${
													darkMode
														? "text-green-400"
														: "text-purple-600"
												}`}
												size={18}
											/>
											<span className="font-mono">
												Status: {project.status}
											</span>
										</div>
									</div>
								</div>

								<div>
									<h3
										className={`text-xl font-bold mb-4 ${
											darkMode
												? "text-cyan-300"
												: "text-pink-600"
										} font-mono`}
									>
										[TECH STACK]
									</h3>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className={`px-3 py-1 rounded text-sm font-mono ${
													darkMode
														? "bg-gray-800 text-green-300 border-green-400"
														: "bg-purple-100 text-purple-700 border-purple-300"
												} border transform hover:scale-110 transition-all duration-300`}
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Description */}
							<div className="mb-8">
								<h3
									className={`text-xl font-bold mb-4 ${
										darkMode
											? "text-cyan-300"
											: "text-pink-600"
									} font-mono`}
								>
									[DESCRIPTION]
								</h3>
								<p
									className={`${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									} leading-relaxed mb-4`}
								>
									{project.description}
								</p>
								<p
									className={`${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									} leading-relaxed`}
								>
									This project demonstrates advanced technical
									skills and problem-solving capabilities,
									incorporating modern development practices
									and user-centered design principles. The
									implementation showcases proficiency in{" "}
									{project.tech.join(", ")} and delivers a
									robust solution that meets industry
									standards.
								</p>
							</div>

							{/* Action Buttons */}
							<div className="flex flex-wrap gap-4 justify-center md:justify-start">
								{project.githubLink && (
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center px-6 py-3 rounded-lg ${
											darkMode
												? "bg-gray-800 hover:bg-gray-700 text-green-400"
												: "bg-purple-600 hover:bg-purple-700 text-white"
										} transition-all transform hover:scale-105 font-mono`}
										aria-label="View code on GitHub"
									>
										<Github className="mr-2" size={18} />
										View Code
									</a>
								)}
								{project.liveDemoLink && (
									<a
										href={project.liveDemoLink}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center px-6 py-3 rounded-lg ${
											darkMode
												? "bg-gray-800 hover:bg-gray-700 text-cyan-400"
												: "bg-pink-600 hover:bg-pink-700 text-white"
										} transition-all transform hover:scale-105 font-mono`}
										aria-label="View live demo"
									>
										<ExternalLink
											className="mr-2"
											size={18}
										/>
										Live Demo
									</a>
								)}
								{project.downloadLink && (
									<a
										href={project.downloadLink}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center px-6 py-3 rounded-lg ${
											darkMode
												? "bg-gray-800 hover:bg-gray-700 text-purple-400"
												: "bg-indigo-600 hover:bg-indigo-700 text-white"
										} transition-all transform hover:scale-105 font-mono`}
										aria-label="Download project"
									>
										<Download className="mr-2" size={18} />
										Download
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ProjectModal;

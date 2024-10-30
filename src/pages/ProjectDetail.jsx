// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projects.find((proj) => proj.id === parseInt(id, 10));

	if (!project) {
		return (
			<div className="text-center py-20 text-gray-800 dark:text-white">
				<h2 className="text-2xl font-semibold">Project not found</h2>
				<p className="mt-4">
					Please check the project ID and try again.
				</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-20 px-6 text-gray-800 dark:text-white max-w-5xl">
			<h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
				{project.title}
			</h1>
			<p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center max-w-3xl mx-auto">
				{project.description}
			</p>
			<p className="text-md text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
				{project.details}
			</p>

			{/* GitHub Link */}
			<div className="text-center">
				<a
					href={project.githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
				>
					View on GitHub
				</a>
			</div>

			{/* Image Gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
				{project.images.map((image, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-lg shadow-lg"
					>
						<img
							src={image}
							alt={`${project.title} image ${index + 1}`}
							className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectDetail;

// src/pages/ProjectsList.jsx
import React from "react";
import projects from "../data/projects"; // Import your projects data
import ProjectCard from "../components/ProjectCard"; // Import your ProjectCard component

const ProjectsList = () => {
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-4xl font-bold mb-6">Projects</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} /> // Map over projects and pass each project to ProjectCard
				))}
			</div>
		</div>
	);
};

export default ProjectsList;

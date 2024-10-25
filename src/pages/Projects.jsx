// src/pages/Projects.jsx
import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
	<div className="container mx-auto py-20 px-6 text-gray-800 dark:text-white">
		<h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
			My Projects
		</h1>
		<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	</div>
);

export default Projects;

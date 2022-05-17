import React, { useState } from 'react';
import Project from './Project';
import { projectsData } from '../data';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);

	const openModal = (id) => {
		setProjects(
			projects.map((project) =>
				project.id === id ? { ...project, isOpen: true } : project
			)
		);
	};

	const closeModal = (id) => {
		setProjects(
			projects.map((project) =>
				project.id === id ? { ...project, isOpen: false } : project
			)
		);
	};

	return (
		<div id="projects" className="section min-h-screen bg-shark">
			<div className="flex flex-col w-full items-center my-36">
				<div className="text-4xl text-white border-b-2 border-blue pb-3 mb-14">
					Projects
				</div>
				<div className="flex w-full flex-wrap px-10 md:px-24">
					{projects.map((project) => (
						<div
							key={project.id}
							className="flex flex-col w-full px-4 py-8 md:w-1/2"
						>
							<Project
								project={project}
								openModal={openModal}
								closeModal={closeModal}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;

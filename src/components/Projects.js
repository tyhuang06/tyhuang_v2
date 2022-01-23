import React, { useState } from "react";
import Project from "./Project";
import {
	faReact,
	faJs,
	faPython,
	faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import projectImg1 from "../assets/about2.jpg";
import portfolioImg1 from "../assets/portfolio_home.png";
import portfolioImg2 from "../assets/portfolio_projects.png";
import portfolioImg3 from "../assets/portfolio_project.png";
import portfolioImg4 from "../assets/portfolio_contact.png";
import forumImg1 from "../assets/forum_allposts.png";
import forumImg2 from "../assets/forum_post.png";
import forumImg3 from "../assets/forum_profile.png";
import forumImg4 from "../assets/forum_login.png";

const Projects = () => {
	const [projects, setProjects] = useState([
		{
			id: 1,
			name: "React Portfolio",
			skills: "React.js | React Hooks | TailwindCSS",
			imgs: [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4],
			link: "dummy",
			github: "https://github.com/tyhuang06/tyhuang_v2",
			summary: "Personal Website made with React.js",
			desc: [
				<div>
					Implemented with{" "}
					<span className="text-navy">React.js + React Hooks</span>
				</div>,
				<div>
					Responsive web design using{" "}
					<span className="text-navy">Tailwind CSS</span>
				</div>,
				<div>
					<span className="text-navy">EmailJS</span> to send email
					without backend
				</div>,
				<div>
					<span className="text-navy">Mapbox GL JS</span> to render a
					map displaying location
				</div>,
			],
			icons: [faReact, faJs],
			isOpen: false,
		},
		{
			id: 2,
			name: "Fast Forum",
			skills: "Python | FastAPI | PostgreSQL | Vue.js",
			imgs: [forumImg1, forumImg2, forumImg3, forumImg4],
			link: "",
			github: "https://github.com/tyhuang06/fast_forum",
			summary: "A full stack CRUD forum application",
			desc: [
				<div>
					Backend:{" "}
					<span className="text-navy">
						Python + FastAPI + PostgreSQL
					</span>
				</div>,
				<div>
					Frontend: <span className="text-navy">Vue.js + Vuex</span>
				</div>,
				<div>
					Secure API endpoints using{" "}
					<span className="text-navy">OAuth2</span> and{" "}
					<span className="text-navy">JWT</span>
				</div>,
				<div>RESTful APIs</div>,
			],
			icons: [faPython, faVuejs],
			isOpen: false,
		},
		{
			id: 3,
			name: "project3",
			skills: "code",
			imgs: [projectImg1],
			link: "",
			github: "",
			summary:
				"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
			desc: [
				"Implemented with React.js + React Hooks",
				"TailwindCSS for styling",
				"EmailJS + React Hook Form to send email without backend",
			],
			icons: [faCode],
			isOpen: false,
		},
		{
			id: 4,
			name: "project4",
			skills: "code",
			imgs: [projectImg1],
			link: "",
			github: "",
			summary:
				"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
			desc: [
				"Implemented with React.js + React Hooks",
				"TailwindCSS for styling",
				"EmailJS + React Hook Form to send email without backend",
			],
			icons: [faCode],
			isOpen: false,
		},
	]);

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

import React, { useState } from "react";
import Project from "./Project";
import projectImg1 from "../assets/about2.jpg";
import projectImg2 from "../assets/about.jpg";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "React Portfolio",
            skills: "React.js | React Hooks | TailwindCSS",
            img: projectImg1,
            summary:
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            isOpen: false,
        },
        {
            id: 2,
            name: "project2",
            skills: "code",
            img: projectImg2,
            summary: "It has survived not only five centuries",
            isOpen: false,
        },
        {
            id: 3,
            name: "project3",
            skills: "code",
            img: projectImg1,
            summary:
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            isOpen: false,
        },
        {
            id: 4,
            name: "project4",
            skills: "code",
            img: projectImg1,
            summary:
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
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
        <div id="projects" className="section bg-shark">
            <div className="flex flex-col w-full items-center my-36">
                <div className="text-4xl text-white border-b-2 border-blue pb-3 mb-14">
                    Projects
                </div>
                <div className="flex w-full flex-wrap px-10 md:px-20">
                    {projects.map((project) => (
                        <div className="flex flex-col w-full md:w-1/2">
                            <Project
                                key={project.id}
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

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import ImgSwiper from "./ImgSwiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faExternalLinkAlt,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ project, openModal, closeModal }) => {
    const [isHovered, setHovered] = useState(false);

    const onHover = () => {
        setHovered(true);
    };

    const onHoverLeave = () => {
        setHovered(false);
    };

    return (
        <>
            <div
                className={`project-cards ${isHovered ? "hovered" : ""}`}
                onMouseEnter={onHover}
                onMouseLeave={onHoverLeave}
            >
                <div className="img-wrapper flex justify-center self-center">
                    <div
                        className="img"
                        style={{ backgroundImage: `url(${project.imgs[0]})` }}
                    ></div>
                    <div className={`show-more ${isHovered ? "hovered" : ""}`}>
                        <button
                            type="button"
                            onClick={() => openModal(project.id)}
                            className="button-box button-hover-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="card-text flex-grow py-4 px-8">
                    <div className="text-navy font-bold text-sm">
                        {project.skills}
                    </div>
                    <div className="font-bold text-xl my-2">{project.name}</div>
                    <div className="">{project.summary}</div>
                </div>
            </div>

            <Transition appear show={project.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-30 overflow-y-auto"
                    onClose={() => closeModal(project.id)}
                >
                    <div className="flex justify-center items-center min-h-screen">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="dialog-wrap overflow-hidden flex transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex flex-col h-full w-full dialog-wrapper">
                                    <div className="">
                                        <ImgSwiper project={project} />
                                    </div>
                                    <div className="flex h-full flex-col mx-6 mt-4 mb-2">
                                        <div className="flex items-center justify-between flex-col md:flex-row">
                                            <Dialog.Title
                                                as="h3"
                                                className="mt-2 text-xl font-medium leading-6 text-shark "
                                            >
                                                {project.name}
                                            </Dialog.Title>
                                            <div className="text-xl mt-2">
                                                {project.icons.map((icon) => (
                                                    <FontAwesomeIcon
                                                        icon={icon}
                                                        className="text-navy ml-2"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-center md:justify-start">
                                            <p className="text-sm text-gray">
                                                {project.summary}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex-grow text-shark">
                                            {project.desc.map((desc) => (
                                                <div className="project-desc flex items-center">
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                        className="mr-2"
                                                    />
                                                    {desc}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mx-6 my-6 flex flex-col md:flex-row">
                                        <div className="link group flex-grow self-center">
                                            {project.link ? (
                                                <a
                                                    href={project.link}
                                                    type="button"
                                                    className="button-box-sm button-hover-light mr-4"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faExternalLinkAlt}
                                                        className="mr-2"
                                                    />
                                                    View Site
                                                </a>
                                            ) : (
                                                ""
                                            )}

                                            {project.github ? (
                                                <a
                                                    href={project.github}
                                                    type="button"
                                                    className="button-box-sm button-hover-light"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faGithub}
                                                        className="mr-2"
                                                    />
                                                    Github Repo
                                                </a>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="flex justify-self-end self-end text-2xl text-lightGray hover:text-gray"
                                            onClick={() =>
                                                closeModal(project.id)
                                            }
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Project;

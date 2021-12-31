import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import ImgSwiper from "./ImgSwiper";

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
                <div className="card-text flex-grow p-4">
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
                                    <div className="flex h-full flex-col mx-4 my-2">
                                        <Dialog.Title
                                            as="h3"
                                            className="mt-2 text-lg font-medium leading-6 text-gray-900"
                                        >
                                            {project.name}
                                        </Dialog.Title>
                                        <div className="">
                                            <p className="text-sm text-gray">
                                                {project.summary}
                                            </p>
                                        </div>

                                        <div className="mt-2 flex-grow">
                                            {project.desc.map((desc) => (
                                                <div>{desc}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="button-base button-navy"
                                            onClick={() =>
                                                closeModal(project.id)
                                            }
                                        >
                                            Close
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

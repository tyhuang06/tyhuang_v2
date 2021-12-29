import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

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
                        style={{ backgroundImage: `url(${project.img})` }}
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
                {/* <div className="card-footer pb-2 pr-4 flex justify-end">
                    <button
                        type="button"
                        onClick={() => openModal(project.id)}
                        className="button-base button-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        Show More
                    </button>
                </div> */}
            </div>

            <Transition appear show={project.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => closeModal(project.id)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {project.name}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => closeModal(project.id)}
                                    >
                                        Got it, thanks!
                                    </button>
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

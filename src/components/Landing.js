import React from "react";

const Landing = () => {
    return (
        <div id="landing" className="section bg-shark text-white">
            <div className="flex flex-row items-center w-full">
                <div className="landing-info w-full flex flex-col items-center px-5 md:items-start md:px-40">
                    <div>
                        <div className="text-5xl flex flex-col md:flex-row">
                            Hi! I'm
                            <span className="text-blue flex-wrap md:pl-2">
                                Emile
                            </span>
                        </div>
                        <div className="text-3xl mt-4 flex flex-col md:flex-row">
                            <div className="flex-wrap">Software Engineer /</div>
                            <div className="flex-wrap md:pl-2">
                                Web Developer
                            </div>
                        </div>
                    </div>
                    <div className="short-intro text-gray text-xl text-center md:text-left">
                        Currently a graduate student studying Computer Science
                        at Northeastern University
                    </div>
                    <div className="buttons_container">
                        <button className="button-base button-navy mr-4">
                            Contact Me
                        </button>
                        <button className="button-base button-gray">
                            Grab Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;

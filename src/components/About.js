import React from "react";
import aboutPic from "../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div id="about" className="section bg-white text-shark">
            <div className="flex flex-col w-full items-center my-36">
                <div className="text-4xl border-b-2 border-blue pb-3 mb-14">
                    About Me
                </div>
                <div className="about-block flex px-10 flex-col md:flex-row md:px-20">
                    <div className="about-img flex justify-center m-6 w-full md:w-2/5">
                        <div className="relative w-full h-full">
                            <div className="img-wrapper">
                                <img
                                    alt=""
                                    src={aboutPic}
                                    width="300"
                                    height="300"
                                    className="rounded-lg"
                                ></img>
                            </div>
                            <div className="img-outline"></div>
                        </div>
                    </div>
                    <div className="w-full py-6 md:w-3/5 md:px-6">
                        Hi! I am TY and I’m currently studying Computer Science
                        at Northeastern University.
                        <br />
                        <br />I was a software engineer intern with BenQ
                        Corporation for one year doing web development. I mostly
                        focused on frontend and worked with a team of 15 to
                        develop responsive web pages with flexible Vue
                        components.
                        <br />
                        <br />I am always looking for ways to improve the
                        performance of web apps and am passionate about creating
                        fast, well-structured apps. Apart from the web
                        development experience, I am also proficient in OOD with
                        Python/Java.
                        <br />
                        <br />
                        Here are a few technologies I've been working with
                        <div className="flex flex-col w-full text-navy font-medium mt-2">
                            <div className="flex w-full">
                                <div className="about-skills">
                                    <FontAwesomeIcon
                                        icon={faJsSquare}
                                        className="mr-2"
                                    />
                                    Javascript
                                </div>
                                <div className="about-skills">
                                    <FontAwesomeIcon
                                        icon={faPython}
                                        className="mr-2"
                                    />
                                    Python
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="about-skills">
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        className="mr-2"
                                    />
                                    React.js
                                </div>
                                <div className="about-skills">
                                    <FontAwesomeIcon
                                        icon={faPython}
                                        className="mr-2"
                                    />
                                    Django
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

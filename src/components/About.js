import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import aboutPic from "../assets/about.jpg";

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
                        Hi! I am Emile and I’m currently studying Computer
                        Science at Northeastern University.
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
                                    <CheckIcon className="icon" />
                                    Javascript
                                </div>
                                <div className="about-skills">
                                    <CheckIcon className="icon" />
                                    Python
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="about-skills">
                                    <CheckIcon className="icon" />
                                    React.js
                                </div>
                                <div className="about-skills">
                                    <CheckIcon className="icon" />
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

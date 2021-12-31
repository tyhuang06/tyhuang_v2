import React from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div id="contact" className="section bg-white text-shark">
            <div className="flex flex-col w-full items-center my-36">
                <div className="text-4xl text-shark border-b-2 border-blue pb-3 mb-14">
                    Contact Me
                </div>
                <div className="flex flex-col md:flex-row w-4/5 bg-sea text-white rounded-lg shadow-xl">
                    <div className="left w-full md:w-1/2">
                        <div className="m-6">
                            <div className="text-2xl"></div>
                            <div className="social-icons-wrapper">
                                <a
                                    className="social-icons"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/tyhuang06/"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a
                                    className="social-icons"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/tyhuang06"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a
                                    className="social-icons"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.instagram.com/yellowfish_8787/"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a
                                    className="social-icons"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://facebook.com/tyhuang06"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right w-fulll md:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

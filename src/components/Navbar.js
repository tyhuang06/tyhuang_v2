import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        // Find current scroll position
        let currentScrollPos = window.pageYOffset;

        // Set state based on location
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div
            className={`navbar bg-shark text-white w-full flex fixed ${
                visible ? "show-nav" : "hide-nav"
            }`}
        >
            <div className="flex w-full justify-between items-center ml-24 mr-12">
                <div className="flex text-2xl">Emile Huang</div>
                <ul className="nav-links flex flex-row h-full items-center">
                    <li>
                        <Link
                            activeClass="active"
                            to="landing"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={30}
                            duration={1000}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

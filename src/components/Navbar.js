import React, { useState, useEffect } from "react";

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
            <div className="flex w-full justify-between items-center mx-10">
                <div className="flex text-2xl">Emile Huang</div>
                <ul className="nav-links flex flex-row">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div id="contact" className="section bg-white text-shark">
            <div className="flex flex-col w-full items-center my-36">
                <div className="text-4xl text-shark border-b-2 border-blue pb-3 mb-14">
                    Contact Me
                </div>
                <div className="flex w-4/5 bg-sea text-white">
                    <div className="left w-full md:w-1/2">
                        <div>Get in touch!</div>
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

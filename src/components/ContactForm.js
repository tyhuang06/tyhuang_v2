import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        console.log(data);
    };

    return (
        <div className="contact-form flex w-full">
            <form
                id="contact-form"
                className="flex flex-col w-full bg-white m-6 px-4 pt-6 rounded-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="wrapper input-wrapper">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Please enter your name",
                            },
                            maxLength: {
                                value: 30,
                                message: "Please use 30 characters or less",
                            },
                        })}
                    ></input>

                    <div className="input-slider"></div>
                    {errors.name && (
                        <span className="errorMessage">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="wrapper input-wrapper">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: true,
                            pattern:
                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                    ></input>

                    <div className="input-slider"></div>
                    {errors.email && (
                        <span className="errorMessage">
                            Please enter a valid email address
                        </span>
                    )}
                </div>
                <div className="wrapper input-wrapper">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: {
                                value: true,
                                message: "Please enter a subject",
                            },
                            maxLength: {
                                value: 75,
                                message: "Subject cannot exceed 75 characters",
                            },
                        })}
                    ></input>

                    <div className="input-slider"></div>
                    {errors.subject && (
                        <span className="errorMessage">
                            {errors.subject.message}
                        </span>
                    )}
                </div>
                <div className="wrapper textarea-wrapper flex-grow">
                    <textarea
                        rows={6}
                        name="message"
                        placeholder="Message"
                        className="pt-2"
                        {...register("message", {
                            required: true,
                        })}
                    ></textarea>

                    <div className="input-slider"></div>
                    {errors.message && (
                        <span className="errorMessage">
                            Please enter a message
                        </span>
                    )}
                </div>
                <div className="wrapper justify-end my-4">
                    <button
                        type="submit"
                        className="button-base button-hover-light"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

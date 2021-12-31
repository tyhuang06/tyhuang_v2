import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const form = useRef();

    const toastifySuccess = () => {
        toast("Message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: "send-mail-toast",
            toastId: "sendMailToast",
        });
    };

    const onSubmit = async () => {
        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            toastifySuccess();
            reset();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="contact-form flex w-full h-full">
            <form
                id="contact-form"
                ref={form}
                className="flex flex-col w-full bg-white m-6 px-4 pt-6 rounded-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="wrapper input-wrapper">
                    {errors.name && (
                        <span className="errorMessage">
                            {errors.name.message}
                        </span>
                    )}
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
                </div>
                <div className="wrapper input-wrapper">
                    {errors.email && (
                        <span className="errorMessage">
                            Please enter a valid email address
                        </span>
                    )}
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
                </div>
                <div className="wrapper input-wrapper">
                    {errors.subject && (
                        <span className="errorMessage">
                            {errors.subject.message}
                        </span>
                    )}
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
                </div>
                <div className="wrapper textarea-wrapper flex-grow">
                    {errors.message && (
                        <span className="errorMessage">
                            Please enter a message
                        </span>
                    )}
                    <textarea
                        rows={6}
                        name="message"
                        placeholder="Message"
                        className="pt-2 h-full"
                        {...register("message", {
                            required: true,
                        })}
                    ></textarea>

                    <div className="input-slider"></div>
                </div>
                <div className="wrapper justify-end my-4">
                    <button
                        type="submit"
                        className="button-base button-hover-light self-end"
                    >
                        Send Message
                        <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;

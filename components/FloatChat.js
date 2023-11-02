"use client"
import React from 'react'

import { RxCross2 } from 'react-icons/rx'
import { MdChatBubbleOutline } from 'react-icons/md'

import { submitForm } from '../lib/serverAction'

export default function FloatingChat() {

    function toggleHandler(e) {
        if (e) e.preventDefault();
        document.getElementById("formm").classList.toggle("hidden")
        document.getElementById("chat_icon").classList.toggle("hidden")
        document.getElementById("cross_icon").classList.toggle("hidden")
    }

    async function submitHandler(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        setIsLoading(true)
        const data = { name, email, message }
        const ress = await submitForm(data)
        setAlertMessage(ress.message)
        if (ress.status) { setAlertStatus("success"); }  // In case of success
        if (!ress.status) setAlertStatus("error")   // In case of error
        setShowAlert(true)
        setIsLoading(false)
        resetInputs()
    }

    function resetInputs() {
        document.getElementsByName("name")[0].value = '';
        document.getElementsByName("email")[0].value = '';
        document.getElementsByName("message")[0].value = '';
        toggleHandler();
    }

    return (
        <>
            <div
                id='formm'
                className={`fixed hidden flex-col z-50 bottom-20 right-8 sm:top-auto sm:right-5 sm:left-auto h-[330px] w-[250px] sm:w-[350px] overflow-auto min-h-[600x] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md transition-all`}
            >
                {/* Header */}
                <div className="flex p-5 flex-col justify-center items-center h-32 bg-primary">
                    <h3 className="text-lg text-white">How can we help?</h3>
                    <p className="text-white opacity-50">We will response you soon In Sha Allah</p>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 flex-grow p-6">
                    <form action={submitHandler}>

                        {/* Name Box */}
                        <div className="mb-4">
                            <label
                                htmlFor="full_name"
                                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="full_name"
                                placeholder="John Doe"
                                required
                                className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            />
                            <div
                                className="empty-feedback invalid-feedback text-red-400 text-sm mt-1 hidden"
                            >
                                Please provide your full name.
                            </div>
                        </div>

                        {/* Email Box */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@company.com"
                                required
                                className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            />
                            <div className="empty-feedback text-red-400 text-sm mt-1 hidden">
                                Please provide your email address.
                            </div>
                            <div className="invalid-feedback text-red-400 text-sm mt-1 hidden">
                                Please provide a valid email address.
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                            >Your Message</label>

                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                className="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                required
                            ></textarea>
                            <div
                                className="empty-feedback invalid-feedback text-red-400 text-sm mt-1 hidden"
                            >
                                Please enter your message.
                            </div>
                        </div>

                        {/* Send Button */}
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="w-full px-3 py-4 text-white bg-primary rounded-md focus:bg-indigo-600 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            {/* Toogle Button with two svgs */}
            <button
                id="w3f__widget--btn"
                className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-primary rounded-full focus:outline-none hover:bg-indigo-600 transition duration-300 ease "
                onClick={toggleHandler}
            >
                <MdChatBubbleOutline
                    id='chat_icon'
                    className="w-6 h-w-6 text-white absolute"
                    size={30}
                />

                <RxCross2
                    id='cross_icon'
                    className="w-6 h-6 text-white absolute hidden"
                />
            </button>
        </>
    )
}

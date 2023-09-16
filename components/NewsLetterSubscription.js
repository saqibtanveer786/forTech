import React from 'react'

export default function NewsLetterSubscription() {
    return (
        <section id="newsletter" className="grid grid-cols-2 gap-2  my-8 p-2">
            <p className="text-4xl col-span-2 md:text-left border-l-4 border-blue-800 pl-2 text-blue-800">Join Our Newsletter</p>

            <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center   ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 md:h-60 md:w-60 text-blue-700 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-xl text-center text-blue-800">
                    Join Our newsletter and get upcoming posts directly in your mail


                </p>
            </div>
            <form className="flex flex-col justify-center col-span-2 md:col-span-1 md:mt-0 mt-4">
                <div>
                    {/* <!-- <label className="text-md font-semibold text-gray-800 ">Your Email</label> --> */}
                    <input type="email" placeholder="your email" className="mt-4 p-4 mb-8 border focus:outline-white w-full text-gray-800" />

                </div>
                <input type="text" placeholder="your name" className="p-4  border focus:outline-white w-full text-gray-800" />
                <button className="w-full p-4 bg-blue-700 mt-8 text-xl uppercase text-gray-50 hover:bg-blue-800 focus:outline-none" type="submit">Subscribe</button>
            </form>
        </section>
    )
}

'use client';
import React, { useState } from 'react';

// Importing server action
// import { submitForm } from '../../../lib/serverAction'

export default function Contact() {
  const [data, setData] = useState();

  // function inputChange(e) {
  //   e.preventDefault();
  //   setData({ ...data, [e.target.name]: e.target.value });
  // }
  return (
    <>
      <section className="">
        <div className="container mx-auto flex h-full justify-center mt-8 relative">
          <section className="flex flex-col md:flex-row gap-4 p-4 w-full justify-center">
            <div className="bg-blue-900 rounded-2xl flex flex-col px-8 justify-center items-center md:items-start order-2 md:order-1 md:rounded-tl-2xl md:rounded-bl-2xl">
              <h1 className="text-4xl mt-8 md:mt-0 border-b-2 md:border-b-0 text-gray-50">Contact Us</h1>

              <div className="mt-8 flex flex-col w-full gap-8">
                <div className="flex w-full gap-1 items-center text-xl md:text-sm  text-gray-100">

                  23 Avenue Park ,Paris
                </div>

                <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">

                  mail@blog.com
                </div>
                <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">

                  +91 8858856668
                </div>
              </div>
              <div className="flex gap-8  mt-8 mb-8 md:mb-0 items-start">

              </div>
            </div>
            <div className="md:w-1/2 order-1">
              <h2 className="text-4xl font-bold mb-4 tracking-wider text-blue-600">Get In Touch</h2>
              <form className="w-full" >
                <div className="w-full">
                  <label className="text-gray-600 font-medium md:my-2">Your Message</label>
                  <textarea
                    placeholder="your message"
                    cols="5"
                    rows="6"
                    className="outline-none focus:outline-none border   text-xl   p-4 text-gray-800  w-full"
                    name='message'
                  ></textarea>

                </div>
                <div className="w-full">
                  <label className="text-gray-600 font-medium md:my-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full  p-2 my-2 px-4 border focus:border-b-4  text-xl text-gray-800  focus:outline-none" placeholder="your email"
                    required="true"
                    name='email'
                  />

                </div>
                <div className="w-full mb-4 md:mb-0">
                  <label className="text-gray-600 font-medium md:my-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full  p-2 px-4 border  text-xl text-gray-800  focus:outline-none"
                    placeholder="your name"
                    required="true"
                    name='name'
                  />
                </div>
                <button
                  className="my-2 py-3 delay-200 text-md uppercase  tracking-wider font-medium text-center w-full rounded-full bg-transparent text-blue-900 hover:text-white hover:bg-blue-700 border border-blue-900  focus:outline-none "
                  type="submit"
                >Send</button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

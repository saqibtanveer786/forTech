'use client';
import React, { useContext, useState } from 'react';

// Importing server action
import { submitForm } from '../../../lib/serverAction'

// Importing contexts
import { AlertContext, LoadingContext } from '../../../lib/context';

export const metadata = {
  title: 'forTech-Contact',
  description: 'forTech | leave a message for forTech'
}

export default function Contact() {
  const [data, setData] = useState({})

  // consuming the contexts
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)

  function getData(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  async function submitHandler(e) {
    e.preventDefault()
    setIsLoading(true)
    const ress = await submitForm(data)
    setAlertMessage(ress.message)
    if (ress.status) { setAlertStatus("success"); setData({}) }  // In case of success
    if (!ress.status) setAlertStatus("error")   // In case of error
    setShowAlert(true)
    setIsLoading(false)
  }

  // async function submitFormHandler(formData) {
  //   setIsLoading(false);

  //   const ress = await submitForm(formData)


  //   if (ress.status) {        // in case of success
  //     setAlertStatus("success")
  //   }
  //   if (!ress.status) {        // in case of error
  //     setAlertStatus("error")
  //   }

  //   setShowAlert(true)
  //   setAlertMessage(ress.message)

  //   setIsLoading(false)
  // }
  return (
    <>
      <section className="w-[80%] mx-auto">
        <div className="container mx-auto flex h-full justify-center mt-8 relative">
          <section className="flex flex-col md:flex-row gap-4 p-4 w-full justify-center">

            {/* Contact Info email and number */}
            <div className="bg-blue-900 rounded-2xl flex flex-col px-8 justify-center items-center md:items-start order-2 md:order-1 md:rounded-tl-2xl md:rounded-bl-2x py-14">
              <h1 className="text-4xl border-b-2 md:border-b-0 text-gray-50">Contact Us</h1>
              <div className="mt-8 flex flex-col w-full gap-8">
                <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">
                  adward797@gmail.com
                </div>
                <div className="flex gap-1 items-center text-xl md:text-sm text-gray-100">
                  +92 0318-8205462
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 order-1">
              <h2 className="text-4xl font-bold mb-4 tracking-wider text-blue-600">Get In Touch</h2>
              <form className="w-full">
                <div className="w-full">
                  <label className="text-gray-600 font-medium md:my-2">Your Message</label>
                  <textarea
                    onChange={getData}
                    value={data.message || ""}
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
                    value={data.email || ""}
                    onChange={getData}
                    type="email"
                    autoComplete='off'
                    className="w-full  p-2 my-2 px-4 border focus:border-b-4  text-xl text-gray-800  focus:outline-none" placeholder="your email"
                    required="true"
                    name='email'
                  />

                </div>
                <div className="w-full mb-4 md:mb-0">
                  <label className="text-gray-600 font-medium md:my-2">Your Name</label>
                  <input
                    onChange={getData}
                    value={data.name || ""}
                    type="text"
                    autoComplete='off'
                    className="w-full  p-2 px-4 border  text-xl text-gray-800  focus:outline-none"
                    placeholder="your name"
                    required="true"
                    name='name'
                  />
                </div>
                <button
                  disabled={isLoading}
                  className="my-2 py-3 text-md uppercase tracking-wider font-medium text-center w-full rounded-full bg-transparent text-blue-900 hover:text-white hover:bg-blue-700 border border-blue-900  focus:outline-none "
                  type="submit"
                  onClick={submitHandler}
                >Send</button>
              </form>
            </div>

          </section>
        </div>
      </section>
    </>
  );
}

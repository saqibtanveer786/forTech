"use client"
import React from 'react'

import { signIn } from "next-auth/react"

// Importing logos
import { logos } from '../../../../lib/logos'

export default function page() {
    return (
        <section className="bg-gray-50 px-6 mx-auto h-screen pt-11">
            <div className="flex flex-col items-center justify-center ">
                <div className='-ml-4'>
                    {logos.siteLogo}
                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Welcome
                        </h1>
                    </div>
                    <div className="flex items-center justify-center min-h-[200px] bg-gray-100 px-4">
                        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-full justify-center"
                            onClick={() => signIn('google')}
                        >
                            {logos.google()}
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

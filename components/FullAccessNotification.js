"use client"
import React, { useState, useContext } from 'react'
import { LoadingContext } from '../lib/context'

export default function FullAccessNotification() {
    const [showNotification, setShowNotification] = useState(true)
    return (
        <div className={`absolute -top-3 right-8 z-30 w-[40%] max-w-[400px] min-w-[300px] mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-white ${showNotification ? '' : 'hidden'}`}>

            {/* <!-- Close button (X) --> */}
            <button
                className="absolute top-1 right-1 text-white p-1"
                onClick={() => setShowNotification((previous) => !previous)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            {/* <!-- Title --> */}
            <h2 className="text-2xl font-semibold mb-4 text-red-300">Important Message</h2>

            {/* <!-- Content --> */}
            <p className="mb-4">
                Please login to forTech for accessing all the blogs we publish.
            </p>
        </div>
    )
}

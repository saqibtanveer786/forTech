"use client"
import React from 'react'

export default function Alert({ show, message, status, setShow }) {
    return (
        <>
            {show && status === 'Success' && (<div className={`bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded relative my-4`}>
                <strong className="font-bold mr-6">{status}</strong>
                <span className="block sm:inline">{message}</span>
                <span className="block sm:inline" onClick={() => setShow((pre) = !pre)}>X</span>
            </div>)}
            {show && status === 'Error' && (<div className={`bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded relative my-4`}>
                <strong className="font-bold mr-6">{status}</strong>
                <span className="block sm:inline">{message}</span>
                <span className="block sm:inline" onClick={() => setShow((pre) = !pre)}>X</span>
            </div>)}
        </>
    )
}

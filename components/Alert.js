import React from 'react'

export default function Alert({ show, color, message, status, setShow }) {
    setTimeout(() => {
        setShow(false)
    }, 1500);
    return (
        show && <div class={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-6 py-3 rounded relative my-4`} role="alert">
            <strong class="font-bold mr-6">{status}</strong>
            <span class="block sm:inline">{message}</span>
        </div>
    )
}

import React from 'react'

import { toasts } from '../lib/toasts'

export default function Toast({ show, message, status, setShow }) {
    return (
        <div className='absolute bottom-10 right-6'>
            {show && status === 'success' && toasts.success}
            {show && status === 'error' && toasts.error}
            {show && status === 'warn' && toasts.warn}
        </div>
    )
}

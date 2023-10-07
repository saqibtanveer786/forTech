"use client"
import React, { useContext } from 'react'

import { toasts } from '../lib/toasts'
import { AlertContext } from '../lib/context'

export default function Toast({ session }) {

    // consuming the alert context
    const { showAlert, setShowAlert, alertStatus, alertMessage } = useContext(AlertContext)

    return (
        <div className='fixed bottom-10 right-6'>
            {showAlert && alertStatus === 'success' && toasts.success(alertMessage, setShowAlert)}
            {showAlert && alertStatus === 'error' && toasts.error(alertMessage, setShowAlert)}
            {showAlert && alertStatus === 'warn' && toasts.warn(alertMessage, setShowAlert)}
            {showAlert && alertStatus === 'message' && !session && toasts.message(alertMessage, setShowAlert)}
        </div>
    )
}

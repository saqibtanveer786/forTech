"use client"
import React, { useContext } from 'react'

import { AlertContext } from '../lib/context'

import { toasts } from '../lib/toasts'

export default function Toast() {

    // consuming the alert context
    const { showAlert, setShowAlert, alertStatus, alertMessage } = useContext(AlertContext)

    return (
        <div className='fixed bottom-10 right-6'>
            {showAlert && alertStatus === 'success' && toasts.success(alertMessage, setShowAlert)}
            {showAlert && alertStatus === 'error' && toasts.error(alertMessage, setShowAlert)}
            {showAlert && alertStatus === 'warn' && toasts.warn(alertMessage, setShowAlert)}
        </div>
    )
}

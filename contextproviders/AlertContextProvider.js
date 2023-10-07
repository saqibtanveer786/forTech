"use client"
import React, { useState } from 'react'

// Importing context
import { AlertContext } from '../lib/context'

export default function AlertContextProvider({ children }) {
    const [showAlert, setShowAlert] = useState(true)
    const [alertMessage, setAlertMessage] = useState('Please Login To Access All The Blogs We Publish')
    const [alertStatus, setAlertStatus] = useState('message')
    return (
        <AlertContext.Provider value={{
            showAlert,
            setShowAlert,
            alertMessage,
            setAlertMessage,
            alertStatus,
            setAlertStatus
        }}>
            {children}
        </AlertContext.Provider>
    )
}

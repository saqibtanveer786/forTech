"use client"
import React, { useState } from "react";
import { AlertContext } from "../lib/context";

function AlertContextProvider({ children }) {
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertStatus, setAlertStatus] = useState('')

    return (
        <AlertContext.Provider value={{
            showAlert,
            setShowAlert,
            alertMessage,
            setAlertMessage,
            alertStatus,
            setAlertStatus,
        }}
        >
            {children}
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;
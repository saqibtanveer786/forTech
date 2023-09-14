"use client"
import React, { useState } from "react";
import { MyContext } from "../lib/MyContext";

function AlertContext({ children }) {
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertStatus, setAlertStatus] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <MyContext.Provider value={{
            showAlert,
            setShowAlert,
            alertMessage,
            setAlertMessage,
            alertStatus,
            setAlertStatus,
            isLoading,
            setIsLoading
        }}
        >
            {children}
        </MyContext.Provider>
    );
}

export default AlertContext;
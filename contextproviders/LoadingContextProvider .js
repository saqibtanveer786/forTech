"use client"
import React, { useState } from 'react'

// Importing context
import { LoadingContext } from '../lib/context'

export default function LoadingContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <LoadingContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            {children}
        </LoadingContext.Provider>
    )
}


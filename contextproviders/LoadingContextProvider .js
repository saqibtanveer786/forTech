"use client"
import React, { useState } from 'react'

// Importing context
import { LoadingContext } from '../lib/context'

export default function AlertContextProvider() {
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


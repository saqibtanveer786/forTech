"use client"
import React, { useState } from 'react'

// Importing context
import { OtherStates } from '../lib/context'

export default function OtherStatesContextProvider({ children }) {
    const [currentCommentGettingUpdated, setCurrentCommentGettingUpdated] = useState('')
    return (
        <OtherStates.Provider value={{
            currentCommentGettingUpdated,
            setCurrentCommentGettingUpdated
        }}>
            {children}
        </OtherStates.Provider>
    )
}


"use client"
import React from 'react'

import AlertContextProvider from './AlertContextProvider'
import LoadingContextProvider from './LoadingContextProvider '
import CommentModalContextProvider from './CommentModalContextProvider'
import OtherStatesContextProvider from './OtherStatesContextProvider'

export default function Providers({ children }) {
    return (
        <LoadingContextProvider>
            <AlertContextProvider>
                <CommentModalContextProvider>
                    <OtherStatesContextProvider>
                        {children}
                    </OtherStatesContextProvider>
                </CommentModalContextProvider>
            </AlertContextProvider>
        </LoadingContextProvider>
    )
}

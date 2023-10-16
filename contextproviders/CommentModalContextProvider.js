"use client"
import React, { useState } from 'react'

import { CommentModal } from '../lib/context'

export default function CommentModalContextProvider({ children }) {
    const [openModal, setOpenModal] = useState(false)
    const [commentValue, setCommentValue] = useState()
    return (
        <CommentModal.Provider value={{
            openModal,
            setOpenModal,
            commentValue,
            setCommentValue
        }}>
            {children}
        </CommentModal.Provider>
    )
}

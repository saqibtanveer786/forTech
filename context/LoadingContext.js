"use client"
import React, { useState } from "react";
import { MyContext } from "../lib/MyContext";

function LoadingContext({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <MyContext.Provider value={{
            isLoading,
            setIsLoading
        }}
        >
            {children}
        </MyContext.Provider>
    );
}

export default LoadingContext;
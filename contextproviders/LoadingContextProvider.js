"use client"
import React, { useState } from "react";
import { LoadingContext } from "../lib/context";

function LoadingContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{
            isLoading,
            setIsLoading
        }}
        >
            {children}
        </LoadingContext.Provider>
    );
}

export default LoadingContextProvider;
"use client"
import React, { useContext } from 'react'
import Image from 'next/image'


// Importing gif
import loadingGif from '../public/laodingGif.gif'
import { LoadingContext } from '../lib/context'

export default function Loader({ isPageLoading }) {

    // consuming context
    const { isLoading } = useContext(LoadingContext)

    return (
        (isLoading || isPageLoading) && <div className={`grid place-items-center h-[100vh] w-full fixed z-50 bg-black top-0 opacity-60 left-0`}>
            <svg className='' width="150" height="150" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#03c9d7">
                <g fill="none" fillRule="evenodd" strokeWidth="2">
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r"
                            begin="0s" dur="1.8s"
                            values="1; 20"
                            calcMode="spline"
                            keyTimes="0; 1"
                            keySplines="0.165, 0.84, 0.44, 1"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                            begin="0s" dur="1.8s"
                            values="1; 0"
                            calcMode="spline"
                            keyTimes="0; 1"
                            keySplines="0.3, 0.61, 0.355, 1"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r"
                            begin="-0.9s" dur="1.8s"
                            values="1; 20"
                            calcMode="spline"
                            keyTimes="0; 1"
                            keySplines="0.165, 0.84, 0.44, 1"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                            begin="-0.9s" dur="1.8s"
                            values="1; 0"
                            calcMode="spline"
                            keyTimes="0; 1"
                            keySplines="0.3, 0.61, 0.355, 1"
                            repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        </div>
    )
}

export const toasts = {
    success: (message, setShowAlert) => <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg onClick={() => { setShowAlert((pre) => !pre) }} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>,

    error: (message, setShowAlert) => <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg onClick={() => { setShowAlert((pre) => !pre) }} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>,

    warn: (message, setShowAlert) => <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg onClick={() => { setShowAlert((pre) => !pre) }} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>,

    message: (message, setShowAlert) => <> <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" space="preserve">

                <defs>
                </defs>
                <g
                    style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1, }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <circle cx="45" cy="45" r="45" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(32,196,203)", fillRule: "nonzero", opacity: 1, }} transform="  matrix(1 0 0 1 0 0) " />
                    <path d="M 48.677 68.442 c 0 3.73 -3.051 6.781 -6.781 6.781 h 0 c -3.73 0 -6.781 -3.051 -6.781 -6.781" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(27,167,173)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 67.856 63.283 c -0.521 -0.345 -1.171 -0.693 -1.985 -1.045 c -5.164 -2.352 -4.87 -15.543 -5.681 -23.584 c -1.239 -8.201 -5.178 -13.348 -11.816 -15.442 c -0.859 -2.761 -3.443 -4.781 -6.478 -4.781 s -5.619 2.02 -6.478 4.781 c -6.638 2.094 -10.577 7.241 -11.816 15.442 c -0.81 8.041 -0.517 21.232 -5.681 23.584 c -0.814 0.353 -1.464 0.701 -1.985 1.045 c -1.082 0.716 -0.574 2.398 0.723 2.398 h 25.212 h 0.049 h 25.212 C 68.43 65.68 68.938 63.999 67.856 63.283 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(27,167,173)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 51.885 65.234 c 0 3.73 -3.051 6.781 -6.781 6.781 h 0 c -3.73 0 -6.781 -3.051 -6.781 -6.781" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 71.064 60.075 c -0.521 -0.345 -1.171 -0.693 -1.985 -1.045 c -5.164 -2.352 -4.87 -15.543 -5.681 -23.584 c -1.239 -8.201 -5.178 -13.348 -11.816 -15.442 c -0.859 -2.761 -3.443 -4.781 -6.478 -4.781 s -5.619 2.02 -6.478 4.781 c -6.638 2.094 -10.577 7.241 -11.816 15.442 c -0.81 8.041 -0.517 21.232 -5.681 23.584 c -0.814 0.353 -1.464 0.701 -1.985 1.045 c -1.082 0.716 -0.574 2.398 0.723 2.398 h 25.212 h 0.049 h 25.212 C 71.638 62.473 72.146 60.791 71.064 60.075 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                </g>
            </svg>

            <span className="sr-only">Warning icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg onClick={() => { setShowAlert((pre) => !pre) }} className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>
    </>
}

export default function Footer() {
    return (
        <footer className="font-mono bg-gradient-to-r  border-t border-yellow-300 from-blue-900 via-indigo-900 to-blue-950  z-50 bottom-0 pb-2 pt-3">


            <div className="flex justify-between gap-2 mt-2 items-center flex-wrap-reverse px-8 mx-auto max-w-screen-xl sm:flex sm:items-center sm:justify-between">
                <div className="text-md sm:text-md w-full justify-center flex-wrap text-gray-300 sm:text-center flex flex-row">
                    {"© 2025  "}
                    <a href="https://hammadmustafa.com/" className="mx-1 hover:underline text-yellow-300">
                        HammadMustafa.
                    </a>

                    <span>All Rights Reserved.</span>
                </div>
                <div className="flex justify-center w-full items-center space-x-5 sm:justify-center ">
                    <a href="https://www.facebook.com/hammad.mustafa.6721" className="text-gray-300 hover:text-yellow-300"
                        target='_blank' rel="noopener noreferrer">
                        <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 8 19"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>

                    <a href="https://www.instagram.com/_hammad.72/?hl=en" className="text-gray-300 hover:text-yellow-300"
                        target='_blank' rel="noopener noreferrer">
                       <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="100 100 260 260"
                        >
                            <path
                                fillRule="evenodd"
                                d="M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33 c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37 c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37 C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48 c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57 s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z"
                                clipRule="evenodd"
                            ></path>
                        </svg>

                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="https://www.github.com/hammadmustafa7" target='_blank' className="text-gray-300 hover:text-yellow-300">
                        <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                    
                </div>
            </div>
        </footer>

    );
}




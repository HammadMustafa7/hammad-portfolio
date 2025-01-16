export default function Contact() {
    return (
        <div
        id='contact'
        
        className='flex flex-col p-6 gap-3 font-mono justify-center items-center bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 h-[90vh]'>
            <h1 className='fourfifty:text-4xl text-3xl font-bold text-yellow-300'>FIND ME ON</h1>
            
            <ul className='flex flex-row gap-4 '>
                <li>
                    <div className='flex justify-center items-center '>
                        <a href='https://github.com/HammadMustafa7' className='' target='_blank'>
                            <svg
                                height="45"
                                aria-hidden="true"
                                viewBox="1 1 23 22"
                                version="1.1"
                                width="45"
                                data-view-component="true"
                                className=" text-yellow-300  hover:text-indigo-900 hover:border-yellow-300 hover:border-2  hover:bg-yellow-300 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-lg"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                                    fill="currentColor"

                                ></path>
                            </svg>
                        </a>

                    </div>
                </li>

                <li><div className='flex justify-center items-center gap-8'>
                    <a href='https://www.linkedin.com/in/hammad-mustafa-3769a6316/' className='' target='_blank'>
                        <svg
                            height="45"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            version="1.1"
                            width="45"
                            data-view-component="true"
                            className="text-yellow-300 hover:text-indigo-900 hover:border-yellow-300 hover:border-2 hover:bg-yellow-300 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-lg"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.48 19H5.56V9h2.92v10zm-1.46-11.25c-.94 0-1.71-.76-1.71-1.7 0-.94.77-1.7 1.71-1.7s1.7.76 1.7 1.7c0 .94-.76 1.7-1.7 1.7zM20 19h-2.92v-4.8c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.47V19h-2.92V9h2.8v1.36h.04c.39-.74 1.32-1.52 2.72-1.52 2.9 0 3.44 1.91 3.44 4.4V19z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </a>

                </div>
                </li>
                    {/* <li><div className='flex justify-center items-center gap-4'>
                        <a href='https://twitter.com/HammadMustafa' className='' target='_blank'>
                            <svg
                                height="45"
                                width="45"
                                aria-hidden="true"
                                viewBox="-3 -2.5 30 28"
                                version="1.1"
                                data-view-component="true"
                                class="hover:text-yellow-300 text-indigo-900 hover:border-yellow-300 hover:border-2 bg-yellow-300 hover:bg-indigo-900 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-lg"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.949.564-2.003.974-3.127 1.195-.896-.959-2.178-1.557-3.594-1.557-2.72 0-4.924 2.204-4.924 4.917 0 .385.045.76.127 1.124-4.09-.205-7.719-2.164-10.148-5.144-.423.729-.666 1.577-.666 2.476 0 1.71.87 3.214 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.445 3.377 4.6 3.418-1.68 1.319-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.177-.067 2.18 1.396 4.768 2.211 7.548 2.211 9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>

                    </div>
                    </li> */}
            </ul>
            <h3 className='fourfifty:text-2xl text-xl text-center  font-semibold text-gray-200'>Feel free to <span className='text-yellow-300'>connect</span> with me. </h3> 
        </div>


    );
}

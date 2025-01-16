import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); // Close the menu if screen size is >= 768px
            }
        };

        // Add event listener for resizing
        window.addEventListener("resize", handleResize);

        // Call the function initially to ensure the menu is closed on page load
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavigation = () => {
        setIsMenuOpen(false);
      };


    return (
        <header className="shadow sticky border-b border-yellow-300 z-50 top-0 font-mono">
            <nav className="px-1 sm:px-3 md:py-2 md:px-5 lg:px-10 nine00:px-6 py-1.5 nine00:py-2.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950">
                <div className="flex px-1 sm:px-2 flex-wrap justify-between align-middle items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex justify-between items-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="224"
                            height="50"
                            viewBox="0 0 300 100"
                            role="img"
                            className="fourfifty:h-auto fourfifty:w-auto  w-40 h-10"
                        >
                            <text
                                x="50%"
                                y="54%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontFamily="font-mono, monospace"
                                fontSize="48"
                                fill="#FCD34D"
                                fontWeight="bold"
                                className="hover:underline"
                            >
                                Hammad Mustafa
                            </text>

                        </svg>
                    </Link>


                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 text-yellow-400 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${isMenuOpen ? "block flex-col" : "hidden flex-row"
                            } justify-between flex gap-2.5 md:gap-6 items-center w-full md:flex md:w-auto md:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col items-center mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {[["Home", ""], ["About", "about"], ["Projects", "projects"], ["Contact", "contact"]].map((text, index) => (
                                <li key={index}

                                >
                                    <NavLink
                                        onClick={handleNavigation}
                                        to={`/${text[1]}`}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 text-lg border-b border-gray-700
                     ${isActive ? "text-cyan-500" : "text-yellow-300"}
                     md:hover:bg-transparent md:border-0 hover:text-cyan-500 md:p-0 hover:underline`
                                        }
                                    >
                                        {text[0]}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* GitHub Button */}
                        <button className="mx-auto">
                            <a
                                href="https://www.linkedin.com/in/hammad-mustafa-3769a6316/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 text-lg font-bold  text-indigo-900 hover:text-yellow-300 hover:border-yellow-300 hover:border-2 bg-yellow-300 rounded-lg hover:bg-indigo-900 focus:ring-2 focus:ring-yellow-300 focus:text-yellow-300"
                            >
                                Hire Me
                            </a>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

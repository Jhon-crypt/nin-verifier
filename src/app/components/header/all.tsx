export default function All() {

    return (

        <>

            <section className="relative bg-gray-900">
                <nav className="relative">
                    <div className="container mx-auto px-4">
                        <div className="relative flex h-24 items-center">
                            <a className="inline-block" href="#">
                                <img className="h-10" src="aurora-assets/logos/aurora-logo-white.svg" alt=""/>
                            </a>
                            <button className="lg:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3 19H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
                                <a className="inline-block text-white hover:text-teal-400 mr-10" href="#">
                                    <div className="flex items-center">
                                        <span className="mr-3">Product</span>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a className="inline-block text-white hover:text-teal-400 mr-10" href="#">Features</a><a className="inline-block text-white hover:text-teal-400 mr-10" href="#">Pricing</a><a className="inline-block text-white hover:text-teal-400" href="#">Resources</a>
                            </div>
                            <div className="hidden lg:block ml-auto">
                                <a className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm text-white hover:text-teal-400 font-semibold transition duration-200" href="#">Login</a>
                                <a className="group inline-block justify-center p-1 text-center text-sm text-white font-semibold rounded-lg" href="#">
                                    <div className="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                                        <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                                            <span>Get Started</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="relative pt-12 md:pt-24">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mb-14 mx-auto text-center">
                            <a className="group relative inline-flex mb-6 items-center rounded-full overflow-hidden shadow-3xl" href="#">
                                <div className="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent"></div>
                                <div className="flex flex-wrap sm:flex-nowrap items-center px-6 sm:px-4 py-4 sm:py-2 bg-gray-800 group-hover:bg-opacity-60 rounded-full transition duration-300">
                                    <span className="text-sm text-white">Get ahead of the game with insights from 1200+ top marketers.</span>
                                    <div className="mt-1 sm:mt-0 mx-auto sm:mr-0 sm:ml-2 flex items-center">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-br font-bold from-green-500 via-teal-500 to-cyan-800 transition duration-300">Read more</span>
                                        <span className="ml-3">
                                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.00004 5H9.33337M9.33337 5L5.33337 1M9.33337 5L5.33337 9" stroke="url(#paint0_linear_3112_14890)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <defs><linearGradient id="paint0_linear_3112_14890" x1="9.46358" y1="-1.5" x2="5.46163" y2="9.11123" gradientUnits="userSpaceOnUse"><stop stop-color="#ACE348"><stop offset="1" stop-color="#25ACA0"></stop></stop></linearGradient></defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <div className="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                                <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Your marketing assets, at your fingertips.</h1>
                                <p className="max-w-lg mx-auto text-lg text-gray-300 mb-10">Empowers marketing team to easily store, organize, and access valuable assets from anywhere.</p>
                                <a className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-gray-900 bg-yellowGreen-600 rounded-lg transition-all duration-300" href="#">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                                    <span className="mr-3">Request Access</span>
                                    <span className="transform group-hover:translate-x-1 transition duration-300">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <img className="block mx-auto" src="aurora-assets/headers/header-dark-theme-center.png" alt=""/>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-teal-800 opacity-70"></div>
                    <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
                        <div className="flex mb-auto items-center">
                            <a className="inline-block mr-auto" href="#">
                                <img className="h-10" src="aurora-assets/logos/aurora-logo.svg" alt=""/>
                            </a>
                            <a className="navbar-close" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="py-12 mb-auto">
                            <ul className="flex-col">
                                <li className="mb-6"><a className="inline-block text-black" href="#">Product</a></li>
                                <li className="mb-6"><a className="inline-block text-black" href="#">Features</a></li>
                                <li className="mb-6"><a className="inline-block text-black" href="#">Pricing</a></li>
                                <li><a className="inline-block text-black" href="#">Resources</a></li>
                            </ul>
                        </div>
                        <div><a className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200" href="#">Login</a><a className="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200" href="#">Get Started</a></div>
                    </nav>
                </div>
            </section>

        </>

    )

}
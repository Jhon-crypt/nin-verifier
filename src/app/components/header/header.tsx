export default function Header() {

    return (

        <>

            <nav className="relative">
                <div className="container mx-auto px-4">
                    <div className="relative flex h-24 items-center">
                        <a className="inline-block" href="#">
                            <img className="h-10" src="https://shuffle.dev/aurora-assets/logos/aurora-logo-white.svg" alt="" />
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

        </>

    )

}
export default function HeaderHero(){

    return (

        <>
        
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
                                    <div className="absolute top-0 left-0 w-full h-full rounded-lg animate-pulse group-hover:ring-0 transition duration-300" style={{ backgroundColor:"#A3E33A" }}></div>
                                    <span className="mr-3 text-white">Request Access</span>
                                    <span className="transform group-hover:translate-x-1 transition duration-300">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <img className="block mx-auto" src="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" alt=""/>
                    </div>
                </div>
        
        </>

    )

}
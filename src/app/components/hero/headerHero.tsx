export default function HeaderHero(){

    return (

        <>
        
        <div className="relative pt-12 md:pt-24">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mb-14 mx-auto text-center">
                            <a className="group relative inline-flex mb-6 items-center rounded-full overflow-hidden shadow-3xl" href="#">
                                <div className="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent"></div>
                               
                            </a>
                            <div className="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                                <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Unlock Possibilities with your Nin Secure Identity Gateway!</h1>
                                <p className="max-w-lg mx-auto text-lg text-gray-300 mb-10">Experience the ease and security of verifying your identity with our NIN Secure Identity Gateway.</p>
                                <a className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold rounded-lg transition-all duration-300" href="#" style={{ backgroundColor:"#A3E33A" }}>
                                    <div className="absolute top-0 left-0 w-full h-full rounded-lg animate-pulse group-hover:ring-0 transition duration-300" ></div>
                                    <span className="mr-3 text-dark">Get Started</span>
                                    <span className="transform group-hover:translate-x-1 transition duration-300">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                       
                        {/*}
                        <img className="block mx-auto" src="https://shuffle.dev/aurora-assets/headers/header-dark-theme-center.png" alt=""/>
                        {*/}
                        </div>
                </div>
        
        </>

    )

}
'use client'
import { FaIdCard } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';

export default function Header() {

    return (

        <>

            <nav className="relative">
                <div className="container mx-auto px-4">
                    <div className="relative flex h-24 items-center">
                        <a className="inline-block" href="#">
                            <div className="flex items-center">

                                <a href="#" className="flex items-center" style={{ color: "#A3E33A" }}>
                                    <span className="text-2xl font-bold mr-4"><FaIdCard /></span>
                                    <span className="text-2xl font-bold font-heading tracking-tight">Nin-Verifier</span>
                                </a>
                            </div>
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
                                    <span className="mr-3"><Dropdown
                                        inline
                                        label="For who"
                                    >
                                        <p className='ms-3 mb-3'>
                                            Dashboard
                                        </p>
                                        <p className='ms-3 mb-3'>
                                            Settings
                                        </p>
                                        <p className='ms-3 mb-3'>
                                            Earnings
                                        </p>
                                        <p className='ms-3'>
                                            Sign out
                                        </p>
                                    </Dropdown></span>
                                </div>
                            </a>
                            <a className="inline-block text-white hover:text-teal-400 mr-10" href="#">Use cases</a>
                            <a className="inline-block text-white hover:text-teal-400" href="#">Contact</a>
                        </div>
                        <div className="hidden lg:block ml-auto">
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
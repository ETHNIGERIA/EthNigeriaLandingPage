import React from "react";
import { Link } from "react-router-dom";
import Leftsvg from "../Leftsvg";

const Footer = () => {
    return (
        <>
             {/* <Leftsvg /> */}
                <footer className="bg-primary-dark p-5">
                    <div className="container p-6 mx-auto">
                        <div className="lg:flex pl-6">
                            <div className="mt-6 lg:mt-0 lg:flex-1">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    <div className="text-[#fff] font-Inter">
                                        <h3 className="uppercase">Company</h3>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About us</Link>
                                        <Link to="/" className="block mt-1 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact us</Link>
                                        <Link to="/" className="block mt-1 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privacy policy</Link>
                                        <Link to="/" className="block mt-1 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms of Use</Link>
                                    </div>

                                    <div className="text-[#fff] font-Inter">
                                        <h3 className="uppercase text-white">Product</h3>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Dashboard</Link>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Courses</Link>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">People</Link>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Blog</Link>
                                    </div>

                                    <div className="text-[#fff] font-Inter">
                                        <h3 className="uppercase text-white">Get in Touch</h3>
                                        <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Location</Link>
                                        <p className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        4th Floor, Polystar Building <br />2nd Roundabout, Lekki Phase 1 <br/>Lagos - NG 105102
                                        </p>
                                    </div>

                                    <div className="text-[#fff] font-Inter">
                    
                                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Email</span>
                                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">info@ethng.io</span>
                                        <div className="flex mt-4 -mx-1.5 ">
                                            <div className="bg-[#fff] rounded-full w-10 h-10 flex align-center justify-center ml-2">
                                            <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="http://www.w3.org/2000/svg">
                                                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                                </svg>
                                            </a>
                                            </div>
                                            <div className="bg-[#fff] rounded-full w-10 h-10 flex align-center justify-center ml-2">
                                            <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="http://www.w3.org/2000/svg">
                                                <svg className="w-8 h-8 " viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"  />
                                                </svg>
                                            </a>
                                            </div>
                                            <div className="bg-[#fff] rounded-full w-10 h-10 flex align-center justify-center ml-2">
                                            <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="http://www.w3.org/2000/svg">
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"  />
                                                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" />
                                                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" />
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                <hr className="h-1 my-6 bg-[#fff] border-none" />

                <div>
                    <p className="text-center text-[#fff]">&copy; 2023 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer
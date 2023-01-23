import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Navbar.css"
import { useState, useEffect } from "react";

  
const Navbar = () => {

  const[navbar, setNavbar] = useState(false);
  const[showNavItems, setShowNavItems] = useState(false)

  const changeBackground = () => {
    console.log(window.location.href.slice(-7))
    if (window.scrollY >= 580 || (window.location.href.slice(-7)) === "contact") {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })
  return (
    // <div className={navbar ? `fixed flex justify-between w-[100%] z-10 text-[#fff] navbar`: `fixed flex justify-between w-full z-10`}>
    //   <div className="flex md:justify-center items-center hover:text-[#ff0000] px-8 pt-8 md:pt-0">
    //     <Link to="home">
    //       <img
    //         src={images.ethLogoGreen}
    //         style={{ width: "24px", height: "24px" }}
    //         alt="logo"
    //       />
    //     </Link>
        
    //     <div className="font-extrabold text-lg text-primary">
    //       <Link to="home">
    //         ETHNigeria
    //       </Link>
    //     </div>
        
    //   </div>
    //   <div>
    //     <div className="md:hidden block">
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-6 mr-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //       </svg>
    //     </div>
    //     <div className="hidden md:flex flex-col md:flex-row justify-end md:justify-around items-center">
            // <div className="font-extrabold text-lg p-6">
            //   <Link to="/">About</Link>
            // </div>
            // <div className="font-extrabold text-lg p-6">
            //   <a href="/">Events</a>  
            // </div>
            // <div className="font-extrabold text-lg p-6">
            //   <Link to="contact">Contact Us</Link>
            // </div>
    //     </div>
    //     </div>
    //   </div>
      <div className={navbar ? `fixed flex justify-between w-full z-10 text-[#fff] navbar`: `fixed flex justify-between w-full z-10 `}>
        <div className="p-6">
          <Link to="/" className="flex">
            <img
              src={images.ethLogoGreen}
              style={{ width: "24px", height: "24px" }}
            alt="logo"
            />
            <p className="font-extrabold text-lg text-primary"> ETHNigeria</p>
          </Link>
        </div>
        <div className="md:hidden block p-6" onClick={() => {setShowNavItems(!showNavItems)}}>
          {!showNavItems ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> 
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </div>
        <nav className={showNavItems ? "md:flex" :"hidden md:flex"}>
          <div className="navbar-link">
            <Link to="about">About</Link>
          </div>
          <div className="navbar-link">
            <a href="/">Events</a>  
          </div>
          <div className="navbar-link">
            <Link to="contact">Contact Us</Link>
          </div>
        </nav>
      </div>
  );
};





export default Navbar;

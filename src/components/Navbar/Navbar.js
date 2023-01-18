import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Navbar.css"
import { useState, useEffect } from "react";

  
const Navbar = () => {

  const[navbar, setNavbar] = useState("false")

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
    <div className={navbar ? `fixed flex justify-between w-[100%] z-10 text-[#fff] navbar`: `fixed flex justify-between w-full z-10`}>
      <div className="flex md:justify-center items-center md:pl-[50px] hover:text-[#ff0000]">
        <Link to="home">
          <img
            src={images.ethLogoGreen}
            style={{ width: "24px", height: "24px" }}
            alt="logo"
          />
        </Link>
        
        <div className="font-extrabold text-lg text-primary">
          <Link to="home">
            ETHNigeria
          </Link>
        </div>
        
      </div>
      <div className="flex justify-around items-center md:pr-[90px]">
        <div className="font-extrabold text-lg p-6 hed">
         <Link to="/">About</Link>
        </div>
        <div className="font-extrabold text-lg p-6 hed">
          <a href="/">Events</a>
        </div>
        <div className="font-extrabold text-lg p-6">
          <Link to="contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};





export default Navbar;

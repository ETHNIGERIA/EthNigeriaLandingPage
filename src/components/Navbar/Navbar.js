import React from "react";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <div className="fixed bg-[#fff] flex justify-between w-full z-10 mt-3">
      <div className="flex justify-center items-center pl-[50px]">
        <img
          src={images.ethLogoGreen}
          style={{ width: "24px", height: "24px" }}
          alt="logo"
        />
        <div className="font-extrabold text-lg">ETHNigeria</div>
      </div>
      <div className="flex justify-around items-center pr-[90px]">
        <div className="font-medium p-6">
          <a href="https://google.com">About</a>
        </div>
        <div className="font-medium p-6">
          <a href="https://google.com">Events</a>
        </div>
        <div className="font-medium p-6">
          <a href="https://google.com">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

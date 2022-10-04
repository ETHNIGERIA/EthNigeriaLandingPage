import React from "react";
import { images } from "../../constants";

const Community = () => {
    return (
        <div className="bg-gradient-to-b from-secondary-cyan flex flex-col items-center my-8 py-4">
        <div className="flex flex-col text-center my-8">
          <h3 className="text-3xl font-bold">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
    
        <div className="flex space-x-[3rem] mb-8 items-center">
          <div>
            <img className="w-[20rem] h-[20rem]" src={images.ethCommunity} alt="ethereum community" />
          </div>
          <div className="flex flex-col w-[18rem]">
            <h2 className="text-2xl font-bold mb-8">Ethereum  Nigeria <br/>Community</h2>
            <p className="mb-8">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet </p>
            <button className="bg-[#0178D4] w-[15rem] px-3 py-3 mt-4 text-sm font-medium tracking-wide text-[#fff] transition-colors duration-300 transform rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Join the community</button>
          </div>
        </div>
    
        <div className="flex space-x-[3rem] my-8 items-center">
          <div className="flex flex-col w-[18rem]">
            <h2 className="text-2xl font-bold mb-8">Filecoin Orbit Nigeria<br/> Community</h2>
            <p className="mb-8">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
            <button className="bg-[#0178D4] w-[15rem] px-3 py-3 mt-4 text-sm font-medium tracking-wide text-[#fff] transition-colors duration-300 transform rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Join the community</button>
          </div>
          <div>
            <img className="w-[20rem] h-[20rem]" src={images.filCommunity} alt="filecoin community" />
          </div>
        </div>
        </div>
      );
};

export default Community;

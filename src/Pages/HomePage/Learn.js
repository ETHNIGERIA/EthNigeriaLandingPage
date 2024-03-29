import React from "react";
import { images } from "../../constants";

const Learn = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8 px-3 space-y-2">
        <h3 className="text-3xl font-bold">Take a course in blockchain</h3>
        <p>Our goal is to onboard blockchain technology and the opportunity
          until it is no longer a strange topic</p>
        <h4 className="font-bold text-1.5xl">Tracks</h4>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 text-center">
        <div className="h-[18rem] w-[17rem]">
          <div>
            <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackOne} alt="learning track" />

          </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
        <div className="h-[18rem] w-[17rem]">
        <div className="md:mt-[-0.45rem]">
        <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackTwo} alt="learning track" />
        </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 text-center my-4">
        <div className="h-[18rem] w-[17rem]">
          <div>
          <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackThree} alt="learning track" />
          </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
        <div className="h-[18rem] w-[17rem]">
          <div className="md:mt-[-0.45rem]">
          <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackFour} alt="learning track" />
          </div>
            <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
            <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
          </div>
      </div>
    </div>
  );
};

export default Learn;

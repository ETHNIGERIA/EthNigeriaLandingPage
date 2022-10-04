import React from "react";
import { images } from "../../constants";

const Learn = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold">Take a course in blockchain</h3>
        <p>Our goal is to onboard blockchain technology and the opportunity
          until it is no longer a strange topic</p>
        <h4>tracks</h4>
      </div>

      <div className="flex items-center space-x-[7rem]">
        <div className="h-[18rem] w-[17rem]">
          <div>
            <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackOne} alt="learning track" />

          </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
        <div className="h-[18rem] w-[17rem]">
        <div>
        <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackTwo} alt="learning track" />
        </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
      </div>

      <div className="flex items-center space-x-[7rem] my-8">
        <div className="h-[18rem] w-[17rem]">
          <div>
          <img className="w-[17rem] h-[11rem] mb-4" src={images.learningTrackThree} alt="learning track" />
          </div>
          <h3 className="font-bold mb-4">Malesuada Fermentum Tortor</h3>
          <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
        </div>
        <div className="h-[18rem] w-[17rem]">
          <div>
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

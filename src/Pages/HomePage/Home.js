import React from "react";
import Footer from "../../components/Footer/Footer";
import { images } from "../../constants";
import About from "./About";
import Community from "./Community";
import Contact from "./Contact";
import Events from "./Events";
import Learn from "./Learn";

const Main = () => {
  return (
    <>
      <div className="container relative flex flex-col mx-auto px-6">
        <div className="flex mb-[80px]">
          <div className="w-3/5 pl-20 pr-20">
            <div className="text-5xl text-primary leading-{58} mt-[30%] ">
              Growing the Ethereum ecosystem in Africa.
            </div>
            <div className="text-2xl mt-[30px] ml-2">
            <span className="text-primary">ANTICIPATE : </span>THE OFFICIAL WEB3 CONFERENCE OF NIGERIA BLOCKCHAIN WEEK
            </div>
            <div className="flex mt-[70px]">
              <div className="w-[100%] py-[15px] h-[89px ml-2 mr-10 rounded-[21px] flex justify-center items-center border-primary border hover:bg-primary hover:text-secondary text-primary text-2xl">
                Join the community
              </div>
              {/* <div className="w-[292px] h-[89px] rounded-[21px] flex justify-center items-center text-primary border-primary border text-2xl">
                Events
              </div> */}
            </div>
          </div>
          <div className="relative">
            <img src={images.homepageImg} alt="home-page" />
            <img
              className="absolute bottom-2 -left-5"
              src={images.lightBlueCircle}
              alt="light-blue-circle"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around py-5 items-center bg-primary-100">
        <img src={images.blockchainAfrica} alt="Blockchain Africa" />
        <img src={images.stacks} alt="Blockchain Africa" />
        <img src={images.blockverse} alt="Blockchain Africa" />
        <img src={images.web3Ladies} alt="Blockchain Africa" />
        <img src={images.blockchainUni} alt="Blockchain Africa" />
        <img src={images.ethLogoGreen} alt="Blockchain Africa" />
        <img src={images.pinata} alt="Blockchain Africa" />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Community />
      <Learn />
      <Events />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

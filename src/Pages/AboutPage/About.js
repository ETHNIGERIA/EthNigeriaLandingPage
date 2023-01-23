/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { images } from '../../constants';

const About = () => {
  return (
    <div className="flex flex-col mx-auto items-center w-full bg-primary-100 text-primary-700s py-[100px]" id='aboutus'>
      <div className="flex flex-col my-6 items-center justify-center text-center px-3">
        <h1 className='text-7xl font-bold'>About us </h1>
        {/* <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p> */}
      </div>

      <div className="flex flex-col md:flex-row justify-center w-full md:px-[8rem] mt-[35px]">
        <div className='h-[50vh] w-[100%]'>
          <img
            className='w-[100%] h-[100%] px-4 object-cover'
            src={images.aboutMainPic}
            alt="About Main Image" />
        </div>
        <div className='my-6 px-4 pt-8 text-2xl w-[100%]'>
          We are building an ecosystem around ethereum developers and enthusiasts in Nigeria . We hope to build a community around ethereum and decentralization in Nigeria
          by organizing several meet-ups and hackathons around ethereum and the blockchain. We also spread adoption of ethereum by organizing bootcamps and through courses available to all members of ethereum Nigeria<br />
        </div>
      </div>
          <div className="flex flex-col md:flex-row items-center my-4 space-y-8 md:space-x-8 md:justify-center">
        
              <img
                className='w-[100%] md:w-[15rem]  h-[15rem] object-cover md:mt-8'
                src={images.firstSliderImage}
                alt="slider image" />
            
              <img
                className='w-[100%] md:w-[15rem] h-[15rem] object-cover'
                src={images.secondSliderImage}
                alt="slider image" />
                
              <img
                className='w-[100%] md:w-[15rem] h-[15rem] object-cover'
                src={images.thirdSliderImage}
                alt="slider image" />

              <img
                className='w-[100%] md:w-[15rem] h-[15rem] object-cover'
                src={images.fourthSliderImage}
                alt="slider image" />
        
          </div>
          <button className='w-[90%] md:w-[50%] border-primary border py-5 rounded-3xl hover:bg-primary'> Check out our gallery </button>
    </div>
  )
}

export default About
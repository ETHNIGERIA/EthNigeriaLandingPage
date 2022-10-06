/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { images } from '../../constants';

const About = () => {
  return (
    <div className="flex flex-col mx-auto items-center w-full">
      <div className="flex flex-col my-6 items-center justify-center text-center px-3">
        <h3 className='text-3xl font-bold'>Who we are</h3>
        <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
      </div>

      <div className=" flex flex-col md:flex-row justify-center items-center w-full md:px-[8rem]">
        <div>
          <img
            className='w-full h-auto px-4'
            src={images.aboutMainPic}
            alt="About Main Image" />
        </div>
        <div className='my-6 px-4'>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br />
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br />
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
        </div>
      </div>
          <div class="flex flex-col md:flex-row items-center my-4 space-y-8 md:space-x-8 md:justify-center">
        
              <img
                className='w-[15rem] h-[15rem] md:mt-8'
                src={images.firstSliderImage}
                alt="slider image" />
            
              <img
                className='w-[15rem] h-[15rem]'
                src={images.secondSliderImage}
                alt="slider image" />
                
              <img
                className='w-[15rem] h-[15rem]'
                src={images.thirdSliderImage}
                alt="slider image" />
        
              <img
                className='w-[15rem] h-[15rem]'
                src={images.thirdSliderImage}
                alt="slider image" />
            
          </div>
    </div>
  )
}

export default About
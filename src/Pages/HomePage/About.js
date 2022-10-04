import React from 'react';
import { images } from '../../constants';

const About = () => {
  return (
    <div className="flex flex-col mx-auto px-10">
    <div className="flex flex-col my-6 items-center justify-center">
      <h3 className='text-3xl font-bold'>Who we are</h3>
      <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet</p>
    </div>

    <div className="flex mx-auto space-x-6">
      <div>
        <img 
            className='pl-[6rem]'
            src={images.aboutMainPic} 
            alt="About Main Image" />
      </div>
      <div className='pr-[15rem]'>
      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br />
      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br />
      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
      </div>
    </div>

    <div className="flex items-center my-10 space-x-[6rem] pl-[6rem]">
      <div>
        <img
            className='w-[15rem] h-[15rem]' 
            src={images.firstSliderImage} 
            alt="slider image" />
      </div>
      <div>
        <img
            className='w-[15rem] h-[15rem]' 
            src={images.secondSliderImage}
            alt="slider image" />
      </div>
      <div>
        <img
            className='w-[15rem] h-[15rem]' 
            src={images.thirdSliderImage} 
            alt="slider image" />
      </div>
      <div>
        <img
            className='w-[15rem] h-[15rem]' 
            src={images.thirdSliderImage} 
            alt="slider image" />
      </div>
    </div>
    </div>
  )
}

export default About
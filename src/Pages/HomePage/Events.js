import React from 'react'
import { images } from '../../constants'
import Marquee from 'react-fast-marquee'
const Events = () => {
  return (
    <div>
      <Marquee speed={80} className="flex">
        <img className="marqueeImg" src={images.ethLogoGreen} alt="Blockchain Africa" />
         <img className="marqueeImg" src={images.learningTrackFour} alt="Blockchain Africa" />
         <img className="marqueeImg w-[3%]" src={images.ipfsLogo} alt="Blockchain Africa" />

          <img className="marqueeImg" src={images.blockchainAfrica} alt="Blockchain Africa" />
          <img className="marqueeImg" src={images.stacks} alt="Blockchain Africa" />
          <img className="marqueeImg" src={images.blockverse} alt="Blockchain Africa" />
          <img className="marqueeImg" src={images.web3Ladies} alt="Blockchain Africa" />
          <img className="marqueeImg" src={images.blockchainUni} alt="Blockchain Africa" />
          {/* <img className="marqueeImg" src={images.pinata} alt="Blockchain Africa" /> */}
          <img className="marqueeImg" src={images.web3bridge} alt="Blockchain Africa" />
           
        </Marquee>
    </div>
  )
}

export default Events
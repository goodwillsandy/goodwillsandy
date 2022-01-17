/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import TickertapeLogo from "../../../public/images/tt_logo.png";
import SmallcaseLogo from "../../../public/images/smallcase_logo.png";
import UTIMFLogo from "../../../public/images/utimf_logo.png";
import HeroImage from "../../../public/images/hero_image.png";

function Hero() {
  return (
    <>
    <style jsx>
      {`
        .organisation_logos li {
          @apply mr-16;
        }
      `}
    </style>
    <section className='py-80 md:flex md:justify-between md:py-[112px] md:px-64 md:mx-auto'>
      <div className='pb-64 px-16 md:p-0 md:w-3/4'>
        <h1 className='text-l font-display md:text-xl'>
        👋 Hi! I am Sandeep Kumar, a freelance Web Developer and mediocre UI Designer based in Bangalore. I help startups & organisations develop  and grow their product. 
        </h1>
        <p className='mt-32 mb-8'>Organisations i have worked with:</p>
        <ul className='organisation_logos flex'>
          <li><a target="_blank" href="https://www.tickertape.in" rel="noreferrer"><Image src={TickertapeLogo} alt="tickertape" /></a></li>
          <li><a target="_blank" href="https://www.smallcase.com" rel="noreferrer"><Image src={SmallcaseLogo} alt="smallcase" /></a></li>
          <li><a target="_blank" href="https://www.utimf.com" rel="noreferrer"><Image src={UTIMFLogo} alt="utimf" /></a></li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Hero

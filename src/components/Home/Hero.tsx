import React from 'react'
import Image from 'next/image';
import Button from '../Common/Button';
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
        .hero-image {
          display: block;
        }
      `}
    </style>
    <section className='pt-64 text-secondary'>
      <div className='pb-64 px-16'>
        <h1 className='text-veryLarge font-display'>
        👋 Hi! I am Sandeep, a freelance Web Developer and mediocre UI Designer based in Bangalore. I help startups & organisations develop  and grow their product. 
        </h1>
        <p className='mt-32 mb-8'>Organisations i have worked with:</p>
        <ul className='organisation_logos flex'>
          <li><Image src={TickertapeLogo} alt="tickertape" /></li>
          <li><Image src={SmallcaseLogo} alt="smallcase" /></li>
          <li><Image src={UTIMFLogo} alt="utimf" /></li>
        </ul>
      </div>

      <Image 
        className='hero-image image-cover' 
        src={HeroImage}
        alt="Hero Section Image" 
      />
    </section>
    </>
  )
}

export default Hero

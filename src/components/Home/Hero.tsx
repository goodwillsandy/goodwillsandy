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
        section {
          display: flex;
          align-items: center;
          height: 600px;
        }

        .container {
          padding: 0 16px;
        }

        .heading {
          font-size: var(--text-size-lg);
          line-height: 130%;
          font-weight: 700;
        }

        .heading mark {
          background-color: #9cb0b93d;
        }
        
        .organisation_logos li {
          margin-right: 16px;
        }

        @media(min-width: 768px){
          .container {
            padding: 0px;
            margin: 0 64px;
          }
          .heading {
            max-width: 80%;
            line-height: 150%;
            font-family: var(--font-family-heading);
          }
        }
      `}
    </style>
    <section className=''>
      <div className='container'>
        <h1 className='heading font_family_bebas'>
        👋 <mark>Hi! I am Sandeep Kumar, a freelance Web Developer and UI Designer based in Bangalore. I help startups & organisations develop  and grow their product</mark>. 
        </h1>
        <p className='mt_32 mb_8'>Organisations i have worked with:</p>
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

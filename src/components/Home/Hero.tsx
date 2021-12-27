import React from 'react'
import Button from '../Common/Button';

function Hero() {
  return (
    <section className='pt-64 pb-32 px-16 bg-offWhite'>
      <figure>
        <img className='pb-32 img-cover' src="https://via.placeholder.com/316x280.png" alt="Hero Section Image" srcset="" />
      </figure>
      <div>
        <div className='pb-32'>
          <h1 className='text-lg'>You made it to my space!</h1>
          <p className='text-base pt-8'>I am Sandeep Kumar, a professional Frontend developer with little touch of UI Designer. In my free time i can be either found reading books, or exploring outskirts of city on my lovely road bike.</p>
        </div>
        <Button
          type='primary'
          size='medium'
        >
          <>Hire Me</>
        </Button>
      </div>
    </section>
  )
}

export default Hero

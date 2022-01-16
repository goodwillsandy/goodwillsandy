import React from 'react'
import Image from 'next/image';

interface Props {
  image:any;
}

function WorkCard(props: Props) {
  return (
    <>
      <style jsx>
        {`
        
        `}
      </style>
      <div className='px-16'>
        <figure className=''>
          <Image
            className='w-full'
            src={props.image}
            alt="project image"
            layout="responsive"
            objectFit="contain"
          />
        </figure>
        <div>
          <h2 className='mb-8 text-large'>Project Name</h2>
          <p className='text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
        </div>
      </div>
    </>
  )
}

export default WorkCard

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';
import Button from '../Common/Button';

interface Props {
  title: string;
  desc: string;
  image:string;
  link:string;
}

function WorkCard(props: Props) {
  return (
    <>
      <style jsx>
        {`
          .project_card {
            width: 100%;
            box-shadow: 0px 0px 2px 0px grey;
          }
          .image {
            height: 500px;
            width: 100%;
            object-fit: cover;
          }
          .details {
            background: var(--light-color);
            padding: 32px 16px;
          }
          .details h2 {
            font-size: var(--text-size-md);
            font-weight: 500;
          }

          @media(min-width: 769px){
            .project_card {
              display: flex;
              flex-direction: row-reverse;
              max-height: 440px;
            }
            .details {
              width: 50%;
              padding: 64px 32px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              box-sizing: border-box;
            }
            .details h2 {
              font-size: var(--text-size-lg);
              margin-bottom: 16px;
            }
            .details p {
              margin-bottom: 32px;
              font-size: 18px;
            }
            .details span {
              font-size: 18px;
            }
            .image_section {
              width: 50%;
              overflow: hidden;
            }
          }

        `}
      </style>
      <div className='project_card'>
        <figure className='image_section'>
          <img
            className='image'
            src={props.image}
            alt="project image"
          />
        </figure>
        <div className='details'>
          <h2 className='mb_8'>{props.title}</h2>
          <p className='mb_16 paragraph'>{props.desc}</p>
          <Button 
            type="primary" 
            size="medium"
            href={props.link}
          >
            <span className=''>See More</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default WorkCard

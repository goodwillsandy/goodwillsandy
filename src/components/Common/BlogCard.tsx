import React from 'react'

interface Props {
  socialImage: string;
  metaDesc: string;
  metaTitle: string;
  link: string;
}

function BlogCard(props: Props) {
  return (
    <>
      <style jsx>
        {`
          .wrapper {
            
          }
          .image {
            width: 100%;
            object-fit: cover;
          }
          .details {
            padding: 32px 0 0 0;
          }
          .details h2 {
            font-size: var(--text-size-md);
          }
        `}
      </style>
      <div className='wrapper'>
        <figure className=''>
          <img
            className='image'
            src={props.socialImage}
            alt="Blog card image"
          />
        </figure>
        <div className='details'>
          <a className='reset_anchor_decoration' href={props.link}>
            <h2 className='mb_8'>{props.metaTitle}</h2>
          </a>
          <p className='paragraph'>{props.metaDesc}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard

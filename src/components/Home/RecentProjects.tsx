import React from 'react'
import ProjectCard from '../Common/ProjectCard';
import ProjectImage from "../../../public/images/dummy_project_ss.png";

function RecentWork() {
  return (
    <>
      <style jsx>
        {`
          ul li {
            @apply list-none pb-32;
          }
          ul li:last-child {
            @apply list-none p-0;
          }
          h1:after {
            content: "";
            background: black;
            position: absolute;
            left: 3px;
            height: 8px;
            width: 80px;
            top: -8px;
          }
        `}
      </style>
      <section className=''>
        <div className='py-64 px-16 bg-lightPrimary'>
          <h1 className='text-veryLarge font-display mb-24'>
            I am thankful, for the opportunites to work on awesome projects at some great organisations.
          </h1>
          <p className=''>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>
        </div>
        <ul className='py-64'>
          {[1, 2, 3].map((i) => (
            <li key={i} >
              <ProjectCard image={ProjectImage} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default RecentWork

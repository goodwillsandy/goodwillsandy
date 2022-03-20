import React from 'react'
import ProjectCard from '../Common/ProjectCard';
import ProjectImage from "../../../public/images/dummy_project_ss.png";

const projectData = [
  {
    title: 'Tickertape',
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: 'https://www.tickertape.in',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.'
  },
  {
    title: 'UTI MF',
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: 'https://www.utimf.com',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.'
  },
  {
    title: 'The Unusual Cards',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
    link: '#',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.'
  },
]

function RecentWork() {
  return (
    <section>
      <style jsx>
        {`
          .recent_projects {
            padding: 64px 16px;
            position: relative;
          }
          ul li {
            margin-bottom: 30px;
          }
          ul li:last-child {
            margin-bottom: 0px;
          }

          @media(min-width: 769px){
            .recent_projects {
              padding: 0px 0px 80px 0px;
            }
            .section_heading {
              font-size: 42px;
            }
            .content_wrapper {
              background: var(--primary-color);
            }
            .content_wrapper .first_row {
              padding: 80px 64px;
              display: grid;
              grid-template-columns: 59% 39%;
              grid-gap: calc(100% - 98%);
            }
            .content_wrapper .second_row {
              margin-top: 16px;
            }
            .content_wrapper .paragraph {
              margin-bottom: 0px;
            }
            .project_list {
              padding: 0 64px;
            }
            ul li {
              margin-top: 64px;
            }
            ul li:last-child {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
      <div className='recent_projects'>
        <div className='content_wrapper'>
          <div className='first_row'>
            <h1 className='section_heading mb_8'>
              I am thankful, for the opportunites to work on awesome projects at some great organisations.
            </h1>

            <div className='paragraph mb_32'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </div>
          </div>
        </div>
        <ul className='project_list'>
          {projectData.map((items) => (
            <li className='' key={items.title} >
              <ProjectCard {...items} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RecentWork

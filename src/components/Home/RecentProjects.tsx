import React from 'react'
import Button from '../Common/Button'
import ProjectCard from '../Common/ProjectCard'

function RecentWork() {
  return (
    <>
      <style jsx>{`
    ul li {
      @apply list-none pb-32;
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
  `}</style>
      <section className='py-32 px-16 bg-offWhite'>
        <div className='relative'>
          <h1 className='text-veryLarge mb-8'>Recent Projects</h1>
        </div>
        <p className='mb-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ullam. Explicabo obcaecati, perferendis facilis voluptatibus vel quas recusandae magnam sint. Quidem qui, facere aperiam accusamus rerum ipsa sapiente ut laudantium.</p>
        <ul className=''>
          {[1, 2, 3].map((i) => (
            <li key={i} ><ProjectCard /></li>
          ))}
          <li className=''>
            <Button
              type='secondary'
              size='medium'
              fullWidth
            >
              <>{`See All >`}</>
            </Button>
          </li>
        </ul>
      </section>
    </>
  )
}

export default RecentWork

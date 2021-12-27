import React from 'react'

function WorkCard() {
  return (
    <div>
      <figure className='mb-16'>
        <img className='w-full' src="https://via.placeholder.com/300x520.png" alt="Blog card image" />
      </figure>
      <div>
        <h2 className='mb-8 text-large'>Project Name</h2>
        <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quis, ullam beatae consectetur voluptatem tempore aut tenetur aliquam? Facere assumenda autem laboriosam ab explicabo nulla, eius impedit sapiente a eos.</p>
      </div>
    </div>
  )
}

export default WorkCard

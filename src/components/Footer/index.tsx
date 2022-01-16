import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <style jsx>{`
        ul li {
          @apply list-none pr-16;
        }
      `}</style>
      <footer className='py-32 px-16 bg-primary text-secondary'>
        <div className='mb-16'>
          <h1 className='text-large mb-8'>Sandeep Kumar</h1>
          <p className='text-small'>Aperiam nemo rerum sint odit et ea perspiciatis necessitatibus. Sequi sint officia debitis est odio ut. Vel veniam veniam aut sint iste delectus harum consectetur.</p>   
        </div>
        <div>
          <h1 className='mb-8 text-base'>Menu</h1>
          <ul className='flex footer-menu text-small'>
            <li>Home</li>
            <li>Work</li>
            <li>Hire Me</li>
          </ul>
        </div>
      </footer>
      </>
    )
  }
}

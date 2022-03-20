import React, { Component } from 'react'

interface Props {
  className: string;
}

export default class Footer extends Component <Props> {
  render() {
    return (
      <footer className={`${this.props.className}`}>
      <style jsx>{`
        footer {
          padding: 32px 16px;
          background-color: var(--dark-color);
          color: var(--light-color);
          box-sizing: border-box;
        }
        .
        .footer_heading {
          font-size: var(--text-size-md);
          line-height: 120%;
        }
        .footer_description {
          font-size: var(--text-size-sm);
          line-height: 120%;
        }
        ul li {
          @apply list-none pr-16;
        }

        @media(min-width: 769px){
          footer {
            padding: 32px 64px;
          }
        }
      `}</style>
      <div className='container'>
        <div className='mb_16'>  
          <h1 className='footer_heading mb_8'>Sandeep Kumar</h1>
          <p className='footer_description'>Aperiam nemo rerum sint odit et ea perspiciatis necessitatibus. Sequi sint officia debitis est odio ut. Vel veniam veniam aut sint iste delectus harum consectetur.</p>   
        </div>
        <div>
          <h1 className='mb_8'>Menu</h1>
          <ul className='list_style_none flex text_small'>
            <li>Home</li>
            <li>Work</li>
            <li>Hire Me</li>
          </ul>
        </div>
      </div>
      </footer>
    )
  }
}

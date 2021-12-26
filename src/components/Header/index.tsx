import Link from 'next/link'
import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <header>
          <ul className='flex py-16 px-20 bg-primary text-secondary'>
            {/* Left Section - Logo */}
            <li className='left-section'>
              <Link href="/" passHref>
                <div className="flex">
                  {/* <img src="https://via.placeholder.com/44x35" alt="Logo" className='' /> */}
                  <h1>Sandeep Kumar</h1>
                </div>
              </Link>
            </li>

            {/* Right Sections - Other menu bar */}
            <li className='right-section hidden'>
              <ul className='flex'>
                <li>Hire Me</li>
                <li>Work</li>
                <li>Blog</li>
              </ul>
            </li>
          </ul>
      </header>
    )
  }
}

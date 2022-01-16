import Image from 'next/image';
import Link from 'next/link'
import React, { Component } from 'react'
import HamburgerIcon from "../../../public/images/hamburger.svg";

interface Props {

}

interface State {
  showMobileNav: boolean;
}

export default class Nav extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showMobileNav: false
    }
  }

  toggleMobileNav = (bool?:boolean) => {
    this.setState((prevState) => ({
      showMobileNav: typeof bool === 'undefined' ? !prevState.showMobileNav : bool
    }))
  }

  handleClickOutside = (e: any) => {

  }

  render() {
    return (
      <>
      <style>{`
        .right-section ul{
          position: absolute;
          top: 0;
          right: 0;
          width: 60vw;
          height: 100vh;
        }
        .right-section ul li {
          @apply bg-darkPrimary;
          padding: 8px 16px;
        }
      `}</style>
      <header>
        <ul className='py-16 px-16'>
          {/* Left Section - Logo */}
          <li className='left-section flex justify-between w-full'>
            <Link href="/" passHref>
              <div className="">
                <h1 className='text-large'>Sandeep Kumar</h1>
              </div>
            </Link>
            <figure className='mr-16'>
              <Image 
              className='text-darkPrimary' 
              src={HamburgerIcon} 
              alt="Logo" 
              height={25}
              onClick={() => this.toggleMobileNav()}
              />
            </figure>
          </li>

          {/* Right Sections - Other menu bar */}
          {this.state.showMobileNav ? (
          <li className='right-section'>
            <ul className='bg-lightPrimary text-darkPrimary text-base'>
              <li>Hire Me</li>
              <li>Work</li>
              <li>Blog</li>
            </ul>
          </li>
          ) : null }
        </ul>
      </header>
      </>
    )
  }
}

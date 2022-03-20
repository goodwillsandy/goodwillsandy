import Image from 'next/image';
import Link from 'next/link'
import React, { Component } from 'react'
import HamburgerIcon from "../../../public/images/hamburger.svg";

interface Props {
  className: string;
}

interface State {
  showMobileNav: boolean;
}

export default class Nav extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showMobileNav: false,
    }
  }

  toggleMobileNav = (bool?: boolean) => {
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
        header {
          padding: 16px;
          box-sizing: border-box;
        }
        .left_section {
          width: 100%;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700px;
        }
        .hamburger_icon {
          transform: rotateY(180deg);
          filter: contrast(0.5);
          color: initial;
        }
        .mob.right-section ul{
          position: absolute;
          top: 0;
          right: 0;
          width: 60vw;
          height: 100vh;
        }
        .mob.right-section ul li {
          @apply bg-darkPrimary;
          padding: 8px 16px;
        }

        @media(min-width: 768px){
          header {
            padding: 32px 64px;
          }
          .left_section {
            width: auto;
          }
          .hamburger_icon {
          }
          .right_section ul li {
            margin-right: 16px;
          }
          .right_section ul li:last-child {
            margin-right: 0px;
          }
        }
      `}</style>
        <header className={this.props.className}>
          <ul className='flex justify-between'>
            <li className='left_section'>
              <ul className='flex justify-between'>
                <li>
                  <Link href="/" passHref>
                    <h1 className='logo cursor-pointer'>
                      Sandeep Kumar
                    </h1>
                  </Link>
                </li>
                <li className='mob_only'>
                  <figure className='hamburger_icon'>
                    <Image
                      className='cursor-pointer '
                      src={HamburgerIcon}
                      alt="HamburgerIcon"
                      height={25}
                      onClick={() => this.toggleMobileNav()}
                    />
                  </figure>
                </li>
              </ul>
            </li>

            {/* Right Sections - Other menu bar */}
            <li className='right_section desktop_only'>
              <ul className='flex'>
                <li className='cursor-pointer'>
                  <Link href="/work"><a className="reset_anchor_decoration">Work</a></Link>
                </li>
                <li className='cursor-pointer'>
                  <Link href="/blogs"><a className="reset_anchor_decoration">Blog</a></Link>
                </li>
              </ul>
            </li>

            {/* {this.state.showMobileNav && (
            <li className='mob right-section md:hidden'>
              <ul className='bg-lightPrimary text-darkPrimary text-base md: flex'>
                <li>Hire Me</li>
                <li>Work</li>
                <li>Blog</li>
              </ul>
            </li>
          )} */}

          </ul>
        </header>
      </>
    )
  }
}

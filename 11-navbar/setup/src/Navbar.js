import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'
import Sidebar from './Sidebar'
import Social from './Social'

const Navbar = () => {
  const [showLink, setShowLink] = useState(false)
  const linkContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height
    console.log(linkHeight)
    if (showLink) {
      linkContainerRef.current.style.height = `${linkHeight}px`
    } else {
      linkContainerRef.current.style.height = '0px'
    }
  }, [showLink])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className='links' ref={linkRef}>
            <Sidebar />
          </ul>
        </div>
        <ul className='social-icons'>
          <Social />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

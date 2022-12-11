
import React, {useState} from 'react'
import Link from 'next/link'

import MobileNav from './MobileNav'
import useGsap from '../hooks/useGsap'
import gsap from 'gsap'

const Navbar = () => {
  const {mobileNavRef} = useGsap()
  

  const [nav ,setNav ] = useState(false)
  console.log(nav)
  const openMobileNav = () => {
    setNav(true)
    // gsap.fromTo(mobileNavRef.current, {y:"-100%"} , {y:"0%", duration:1 }) 

  }

  
  
  return (
    <>
    <div className='navbar'>
      <Link href='/'><h2 className='logo'>inej</h2></Link>
        
        <div className='nav-menu' onClick={openMobileNav}>
            <div className='nav-line'></div>
            <div className='nav-line'></div>
        </div>
    </div>

    {nav && <MobileNav setNav={setNav} nav={nav}/>}


    </>
  )
}

export default Navbar
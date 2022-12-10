import React from 'react'
import useGsap from '../hooks/useGsap'
import gsap from 'gsap'

const MobileNav = ({setNav}) => {
    const {mobileNavRef} = useGsap()
    gsap.fromTo(mobileNavRef.current, {y:"-100%"} , {y:"0%", duration:1 }) 

  return (
    <div ref={mobileNavRef} className='mobile-nav'>
        <nav onClick={() => setNav(false)}>close</nav>
        <ul className='nav-list'>
            <li>About</li>
            <li>Price</li>
            <li>Contact</li>
            

        </ul>
    </div>
  )
}

export default MobileNav
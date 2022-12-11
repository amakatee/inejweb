import React, {useEffect} from 'react'
import useGsap from '../hooks/useGsap'
import gsap from 'gsap'

const MobileNav = ({setNav, nav}) => {
  const {mobileNavRef} = useGsap()

  const openNav = () => {
    gsap.fromTo(mobileNavRef.current, {y:"-200%"} , {y:"0%", duration:.8 }) 


  }


  useEffect(() => {
    openNav()
   
 }, [])

  const closeNav = () => {
    setNav(false)
    

  }

  return (
    <div ref={mobileNavRef}  className='mobile-nav'>
        <nav onClick={() => closeNav()}>close</nav>
        <ul className='nav-list'>
            <li>About</li>
            <li>Price</li>
            <li>Contact</li>
            

        </ul>
    </div>
  )
}

export default MobileNav
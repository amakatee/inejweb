import React, {useEffect} from 'react'
import useGsap from '../hooks/useGsap'
import gsap from 'gsap'
import Link from 'next/link'
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
        <nav className='mob-nav' onClick={() => closeNav()}>закрыть</nav>
        <ul className='nav-list'>
            <Link href='/templates'><li>O Шаблонах</li></Link>
            <Link href="/pricing"><li>Цены и сроки</li></Link>
            <Link href='/workflow'><li>Сотрудничество</li></Link>
            

        </ul>
    </div>
  )
}

export default MobileNav
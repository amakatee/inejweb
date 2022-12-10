
import React, {useState} from 'react'

import MobileNav from './MobileNav'

const Navbar = () => {

  const [nav ,setNav ] = useState(false)
  console.log(nav)
  return (
    <>
    <div className='navbar'>
        <h2 className='logo'>inej</h2>
        <div className='nav-menu' onClick={() => setNav(true)}>
            <div className='nav-line'></div>
            <div className='nav-line'></div>
        </div>
    </div>

    {nav && <MobileNav setNav={setNav} />}


    </>
  )
}

export default Navbar
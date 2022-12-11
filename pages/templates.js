import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const templates = () => {
  return (
      <Layout>
         <div className='templates'>
             <h1>Example</h1>
           
             <div className='templates-area'>
                 <Link href='https://capable-kulfi-3d31fb.netlify.app/' target='_blank'> 
                 <div className='templ-image-cont'>
                    <img width={300}  src='/2.jpg'/>
                 {/* <img width={300} src='/1.jpg'/> */}
                  </div>
                     </Link>
      
             <div className='templ-text-cont'>
                 <p>Click to see image</p>

                 <div className='templ-text-main'>
                     <ul>
                         <li>dfkjahdsk</li>
                     </ul>

                 </div>
             </div>
             </div>
            
         </div>

      </Layout>
  )
}

export default templates
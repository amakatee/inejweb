import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import TransitionContext from '../context/AnimationContext'
import useGsap from '../hooks/useGsap'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {secondSection, firstSection,thirdSection, cta1Ref,buttonRef ,darkPageRef, cta2Ref, cta3Ref} = useGsap()

  return (
    <>
     <div className='lines-overlay'>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <main className='main'>
        <section  className='main-video'>
        <video  loop={true} muted={true} autoPlay={true} playsInline controls={false} className={styles.first__secVid}>
         <source
         src='/back.MP4'
         type='video/mp4'
         >
         </source>
        </video>
        <div className='dark-overlay'></div>
      </section>
   
        
       

        <section ref={secondSection} className='first-page'>
          <div className='first-top'>
          <h1>hello</h1>
          </div>
      
          <div className='first-text-box'>
              <h4 ref={cta1Ref}><span className="cta1">We help companies</span></h4>
              <h4 ref={cta2Ref}><span className="cta1">апыоврпалорыр </span></h4>
              <h4 ref={cta3Ref}><span className="cta1">ловращ</span></h4>
       
          </div>
         <div className='first-page-btn'>
         <div ref={buttonRef} className='first-contact-button'>
            <h4>Contatc</h4>
          </div>
         </div>

         <div ref={darkPageRef} className='firs-page-dark'>som</div>
          

       
    
        </section>
        {/* <section  className='second-page'>
          third -pagr
        </section> */}
      
      </main></>
   
     
       
    

  
  )
}

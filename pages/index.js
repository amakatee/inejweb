import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import TransitionContext from '../context/AnimationContext'
import useGsap from '../hooks/useGsap'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {secondSection, firstSection, cta1Ref, cta2Ref, cta3Ref} = useGsap()

  return (
   
      <main className='main'>
         <div className='lines-overlay'>
          <div className='line'></div>
          <div className='line'></div>
        </div>
       
        <div  ref={firstSection} className='main-video'>
        <video  loop={true} muted={true} autoPlay={true} playsInline controls={false} className={styles.first__secVid}>
         <source
         src='/back.MP4'
         type='video/mp4'
         >
         </source>
        </video>
        <div className='dark-overlay'></div>
      </div>

        <section className='first-page'>
          <h1></h1>
          <div className='first-text-box'>
              <h4 ref={cta1Ref}><span className="cta1">We help companies</span></h4>
              <h4 ref={cta2Ref}><span className="cta1">апыоврпалорыр </span></h4>
              <h4 ref={cta3Ref}><span className="cta1">ловращ</span></h4>
       
          </div>
          {/* <div className='lines-overlay'>
          <div className='line'></div>
          <div className='line'></div>
        </div> */}
    
        </section>
        <section ref={secondSection} className='second-page'>
          third -pagr
        </section>
      
      </main>
       
    

  
  )
}

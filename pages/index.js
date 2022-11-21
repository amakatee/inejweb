import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import TransitionContext from '../context/AnimationContext'
import useGsap from '../hooks/useGsap'
import styles from '../styles/Home.module.css'


export default function Home() {
  const {secondSection, firstSection,thirdSection, cta1Ref,buttonRef ,darkPageRef, cta2Ref, cta3Ref,  getKnow1, getKnow2, getKnow3} = useGsap()

  return (
    <>
    <Navbar />
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
          {/* <h1>hello</h1> */}
          </div>
          
          <div className='first-text-box'>
              <h3>hello you </h3>
              <h4 ref={cta1Ref}><span className="cta1">We help companies</span></h4>
              <h4 ref={cta2Ref}><span className="cta1">апыоврпалорыр </span></h4>
              <h4 ref={cta3Ref}><span className="cta1">ловращ</span></h4>
       
          </div>
         <div className='first-page-btn'>
         <div ref={buttonRef} className='first-contact-button'>
            <h4>Contact</h4>
          </div>
         </div>

         <div ref={darkPageRef} className='firs-page-dark'>
           <h3>We provide great busness Solutions</h3>
           <div className='getknow'>
           <div ref={getKnow1} className='getknow-cont'>
              <h4>Expertise</h4>
              <p>Huge helps you make bold leaps that reimagine your customer experience and create positive disruption with powerful results. </p>
              <div className={styles.white__arrow} >
             <span  className='arrow'   >
          
             <svg width={40} viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#fff" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
             </span> 
            </div>
           </div>
           <div  ref={getKnow2} className='getknow-cont'>
              <h4>Expertise</h4>
              <p>Huge helps you make bold leaps that reimagine your customer experience and create positive disruption with powerful results. </p>
              <span className='arrow'  >
          
             <svg width={40} viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#fff" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
             </span>
           </div>
           <div  ref={getKnow3} className='getknow-cont'>
              <h4>Expertise</h4>
              <p>Huge helps you make bold leaps that reimagine your customer experience and create positive disruption with powerful results. </p>
              <span  className='arrow' >
             
          
              <svg width={40} viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#fff" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
             </span>
           </div>

           <div className='getknow-contact'>
             <h4 className='contact'>Lets talk</h4>
             <span  className='arrow' >
             
          
              <svg width={40} viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#000000" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
             </span>

           </div>
           </div>
           
          
         </div>
          

       
    
        </section>
        {/* <section  className='second-page'>
          third -pagr
        </section> */}
      
      </main></>
   
     
       
    

  
  )
}

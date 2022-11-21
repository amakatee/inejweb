import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   
      <main className='main'>
         <div className='lines-overlay'>
          <div className='line'></div>
          <div className='line'></div>
        </div>
       
        <div className='main-video'>
        <video  loop={true} muted={true} autoPlay={true} playsInline controls={false} className={styles.first__secVid}>
         <source
         src='/back.MP4'
         type='video/mp4'
         >
         </source>
        </video>
        <div className='dark-overlay'></div>
      
        </div>

        <section className='second-page'>
          <h1>second page</h1>
          <div className='second-text-box'>
            <div> We help companies grow by increasing thedvkjs </div>
            <div> овыалроулюф </div>

          </div>
          {/* <div className='lines-overlay'>
          <div className='line'></div>
          <div className='line'></div>
        </div> */}
    
        </section>
        <section className='third-page'>
          third -pagr
        </section>
      
      </main>
       
    

  
  )
}

import {createContext, useRef, useEffect, useState} from "react"

import { gsap,  Power3, TweenMax } from "gsap"
import Draggable from "gsap/dist/Draggable";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'







const TransitionContext = createContext()


export const AnimationContext = ({children}) => {
    const { ref:firstSection , inView: firstSecVis, entry } = useInView();
    const { ref:secondSection , inView: secondSecVis, entry:entrySecond } = useInView();
    const { ref:thirdSection , inView: thirdSectionVis, entry:entryThird } = useInView();

    const mobileNavRef = useRef()
    const cta1Ref = useRef()
    const cta2Ref = useRef()
    const cta3Ref = useRef()
    const darkPageRef = useRef()
    const buttonRef = useRef()
    const getKnow1 = useRef()
    const getKnow2 = useRef()
    const getKnow3 = useRef()
    const thirdHeaderRef1 = useRef()
    const thirdHeaderRef2 = useRef()
     const getToKnowRef = useRef()
     

    gsap.fromTo(mobileNavRef.current, {y:"-100%"} , {y:"0%", duration:1 }) 




   
   
 

    // useEffect(() => {
    //   let q = gsap.utils.selector(darkPageRef);

    //   gsap.to(q(".getknow-cont"), {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 1,
    //     stagger: 0.1,
    //     repeat: -1,
    //     repeatDelay: 1,
    //     yoyo: true
    //   });
    // }, []);



    // useEffect(() => {
       

    //     if(firstSecVis) {
        
    //      const tlIntro = gsap.timeline({
    //        scrollTrigger: {
    //          trigger: entry.target,
    //          start: '0%',
    //          end: '100%',
  
         
            
            
    //          pin: true,
    //          pinSpacing: false,
       
    //        }
    //      })

    //     //  tlIntro.fromTo(cta1Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4})
    //     //  tlIntro.fromTo(cta2Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4})
    //     //  tlIntro.fromTo(cta3Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4})

   
    //     //  tlIntro.fromTo(mainVideoRef.current, { opacity:0}, {opacity: 1})
    //     //  tlIntro.fromTo(firsTitleBox.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.1})
    //     //  tlIntro.fromTo(whiteArrow.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.3})
    //     //  tlIntro.fromTo(fairyRef.current, { y: "0%" }, {y: "-50%" , delay:1} )

        
      


    //     }
        
       
    //      }, [firstSecVis]) 


         useEffect(() => {
             if(secondSecVis) {
                const tlIntro2 = gsap.timeline({
                    scrollTrigger: {
                      trigger: entrySecond.target,
                      start: '-5%',
                      end: '10%',
                      scrub: true,
                  
                     
                     
                     
                  
                
                    }
                  })
             gsap.fromTo(cta1Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4})
             gsap.fromTo(cta2Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4}, "-5%")
             gsap.fromTo(cta3Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4}, "-10%")

             }
          

    
             

         },[secondSecVis])
    

         useEffect(() => {
            if(secondSecVis) {
               const tlIntro3 = gsap.timeline({
                   scrollTrigger: {
                     trigger: entrySecond.target,
                     start: '-5%',
                     end: '30%',
                     scrub: true,
                    //  pin: true,
                    //  pinSpacing: false,
                 
                    
                    
                    
                 
               
                   }
                 })
            tlIntro3.fromTo(darkPageRef.current, { y: 9},{ y: -80 })
            tlIntro3.fromTo(buttonRef.current, { y: 0},{ y: -90 })
          
           

            }
            
            

        },[secondSecVis])

        useEffect(() => {
          if(thirdSectionVis) {
            const tlIntro3 = gsap.timeline({
              scrollTrigger: {
                trigger: entryThird.target,
                start: '-65%',
                end: '80%',
                scrub: true,
                stagger: 1,
             
            }
            })
            tlIntro3.fromTo(thirdHeaderRef1.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4,  })
            tlIntro3.fromTo(thirdHeaderRef2.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4,  })

            let q = gsap.utils.selector(getToKnowRef);

            tlIntro3.to(q(".getknow-cont"), {
              opacity: 1,
              y: '-15%',
              scale: 1,
              duration: 1,
              stagger: 1,
              yoyo: true
            });

            tlIntro3.fromTo(q(".getknow-cont h4"), {
              
              y: '-15%',
              scale: 1,
              duration: 1,
              stagger: 1,
              yoyo: true
            }, { y: '0%'});
   
            console.log(q(".getknow-cont h4"))
          }
        }, [thirdSectionVis])

        

        // useEffect(() => {
        //   if(thirdSectionVis) {
        //     const tlIntro4 = gsap.timeline({
        //       scrollTrigger: {
        //         trigger: entryThird.target,
        //         start: '0%',
        //         end: '90%',
        //         scrub: true,
        //     }
        //     })

        //     tlIntro4.fromTo(getKnow1.current, {y: "-100%", opacity:0}, {y: "0%"})

        //   }
        // }, [thirdSectionVis])

      

    return (
        <TransitionContext.Provider
        value={{firstSection, secondSection,thirdSection,darkPageRef,buttonRef, cta1Ref , cta2Ref, cta3Ref, getKnow1, getKnow2, getKnow3, getToKnowRef, thirdHeaderRef1, thirdHeaderRef2, mobileNavRef}}
        >{children}</TransitionContext.Provider>
    )
}

export default TransitionContext
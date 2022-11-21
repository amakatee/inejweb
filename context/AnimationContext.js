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


    const cta1Ref = useRef()
    const cta2Ref = useRef()
    const cta3Ref = useRef()
    const darkPageRef = useRef()
    const buttonRef = useRef()




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
             tlIntro2.fromTo(cta1Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4})
             tlIntro2.fromTo(cta2Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4}, "-5%")
             tlIntro2.fromTo(cta3Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.4}, "-10%")

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
                 
                    
                    
                    
                 
               
                   }
                 })
            tlIntro3.fromTo(darkPageRef.current, { y: 0},{ y: -80 })
            tlIntro3.fromTo(buttonRef.current, { y: 0},{ y: -80 })
          
           

            }
            
            

        },[secondSecVis])

      

    return (
        <TransitionContext.Provider
        value={{firstSection, secondSection,thirdSection,darkPageRef,buttonRef, cta1Ref , cta2Ref, cta3Ref}}
        >{children}</TransitionContext.Provider>
    )
}

export default TransitionContext
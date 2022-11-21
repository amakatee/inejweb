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

    const cta1Ref = useRef()
    const cta2Ref = useRef()
    const cta3Ref = useRef()



    useLayoutEffect(() => {
       

        if(firstSecVis) {
        
         const tlIntro = gsap.timeline({
           scrollTrigger: {
             trigger: entry.target,
             start: '0%',
             end: '40%',
         
            
            
             pin: true,
             pinSpacing: false,
       
           }
         })

         tlIntro.fromTo(cta1Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.6})
         tlIntro.fromTo(cta2Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.6})
         tlIntro.fromTo(cta3Ref.current, {opacity: 0, y: "100%"},{opacity: 1, y: "0%", duration:.6})

   
        //  tlIntro.fromTo(mainVideoRef.current, { opacity:0}, {opacity: 1})
        //  tlIntro.fromTo(firsTitleBox.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.1})
        //  tlIntro.fromTo(whiteArrow.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.3})
        //  tlIntro.fromTo(fairyRef.current, { y: "0%" }, {y: "-50%" , delay:1} )

        
      


        }
        
       
         }, [firstSecVis]) 

         useLayoutEffect(() => {
        
             if(secondSecVis) {
                 const tlSecond = gsap.timeline({
                     scrollTrigger: {
                         trigger: entrySecond.target,
                    
                         scrub: true,
                         start: "-70%",
                         end: "10%",
                        
                    

                    }

                    
                 })
                //  tlSecond.fromTo(secondText.current, {y: "-100%", opacity: 0}, {y: "y:0%", opacity:1,  stagger: 1, duration: 1})


              
               


               
                 


         
           
                

          

 
          

        
           
               

            }

            

            
          
            
             


             
         }, [secondSecVis])


    return (
        <TransitionContext.Provider
        value={{firstSection, secondSection, cta1Ref , cta2Ref, cta3Ref}}
        >{children}</TransitionContext.Provider>
    )
}

export default TransitionContext
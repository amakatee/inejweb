import React, { useContext } from 'react'
import TransitionContext from '../context/AnimationContext'


const useGsap = () => {

  return useContext(TransitionContext)
}

export default useGsap
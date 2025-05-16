'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Gear() {
  const controls = useAnimation()
  const lastScroll = useRef(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const delta = current - lastScroll.current
      lastScroll.current = current

      const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0
      const newRotation = rotation + (delta * 0.5) 
      setRotation(newRotation)
      controls.start({ rotate: newRotation })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [rotation, controls])

  return (
    <div className="fixed top-0 right-0 w-60 h-60 overflow-hidden pointer-events-none z-50">
      <motion.img
        src="gear.png"
        className="absolute h-60 w-auto -top-[100px] -right-[100px]"
        animate={controls}
        initial={{ rotate: 0 }}
      >
      </motion.img>
    </div>
  )
}
'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ContactMe() {
  const [hovered, setHovered] = useState(false)
  // const controls = useAnimation()

  // useEffect(() => {
  //   if (hovered) {
  //     controls.start({ opacity: 1, transition: { delay: 0.1, ease: 'easeOut' } }).then(()=>{
  //       controls.start({ scale: [1, 1.1, 1], transition: { duration: 5, repeat: Infinity } })
  //     })
  //   } else {
  //     // When leaving, skip animation and jump back to default
  //     controls.set({ scale: 1, opacity: 0 })
  //   }
  // }, [hovered, controls])

  const bgSentence = (
    <motion.div
      initial={false}
      animate={{ opacity: hovered ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      className={`text-white text-2xl z-0 absolute ${hovered ? 'pointer-events-none': 'pointer-events-auto'}`}
    >
      And you can always{' '}
      <span className="text-primary animate-pulse font-medium">contact me</span>{' '}
      here.
    </motion.div>
  )
  const contButton = (
    <motion.a
      href="mailto:your.email@example.com"
      target="_blank"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 5, mass: 0.6 }}
      className="text-primary font-semibold text-xl z-10 relative px-6 py-2 border-4 border-primary rounded-lg overflow-hidden"
    >
      <span className="relative text-white z-10 text-5xl">Contact Me</span>
    </motion.a>
  )

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-32 flex items-center justify-center overflow-hidden"
    >
      { hovered ? contButton : bgSentence }
    </div>
  )
}
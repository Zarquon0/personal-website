'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Gear() {
  const controls = useAnimation()
  const lastScroll = useRef(0)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const [rotation, setRotation] = useState(0)
  const [scrolling, setScrolling] = useState(false)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const delta = current - lastScroll.current
      lastScroll.current = current

      const newRotation = rotation + delta * 0.5
      setRotation(newRotation)
      controls.start({ rotate: newRotation })

      setScrolling(true)

      // Clear any existing timeout and reset idle trigger
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => setScrolling(false), 250)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [rotation, controls])

  // Idle spinning effect
  useEffect(() => {
    if (!scrolling) {
      const interval = setInterval(() => {
        setRotation((r) => {
          const next = r - 1
          controls.start({ rotate: next })
          return next
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [scrolling, controls])

  return (
    <div className="fixed top-0 right-0 w-60 h-60 overflow-hidden pointer-events-none z-50">
      <motion.img
        src="gear.png"
        className="absolute h-60 w-auto -top-[100px] -right-[100px]"
        animate={controls}
        initial={{ rotate: 0 }}
      />
    </div>
  )
}

// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { motion, useAnimation } from 'framer-motion'

// export default function Gear() {
//   const controls = useAnimation()
//   const lastScroll = useRef(0)
//   const [rotation, setRotation] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.scrollY
//       const delta = current - lastScroll.current
//       lastScroll.current = current

//       const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0
//       const newRotation = rotation + (delta * 0.5) 
//       setRotation(newRotation)
//       controls.start({ rotate: newRotation })
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [rotation, controls])

//   return (
//     <div className="fixed top-0 right-0 w-60 h-60 overflow-hidden pointer-events-none z-50">
//       <motion.img
//         src="gear.png"
//         className="absolute h-60 w-auto -top-[100px] -right-[100px]"
//         animate={controls}
//         initial={{ rotate: 0 }}
//       >
//       </motion.img>
//     </div>
//   )
// }
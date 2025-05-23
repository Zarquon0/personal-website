'use client'

import { motion } from 'framer-motion'

export default function NameReveal() {
  return (
    <div className="relative w-full pt-16 space-y-12 h-full flex flex-col justify-center">
      
      {/* First Name */}
      <div className="relative h-1/2 flex items-center justify-start">
        <h1 className="text-8xl font-title text-dark relative z-10 pl-[10%]">William</h1>
         <motion.div
          variants={{
            initial: { width: 0 },
            expanded: { width: '30rem', },
            detached: { width: '30rem', left: '5%'},
          }}
          initial="initial"
          animate="detached"
          transition={{
            duration: 1.6,
            ease: 'easeInOut',
            times: [0, 0.7, 1],
          }}
          className="absolute top-[48%] transform -translate-y-1/2 bg-primary z-0 h-24"
        />
      </div> 

      {/* Last Name */}
      <div className="relative h-1/2 flex items-center justify-end">
        <h1 className="text-8xl font-title text-dark relative z-10 pr-[10%]">Stone</h1>
        <motion.div
          variants={{
            initial: { width: 0 },
            expanded: { width: '23rem' },
            detached: { width: '23rem', right: '5%' },
          }}
          initial="initial"
          animate="detached"
          transition={{
            duration: 1.6,
            ease: 'easeInOut',
            times: [0, 0.7, 1],
          }}
          className="absolute top-[48%] transform -translate-y-1/2 bg-primary z-0 h-24"
        />
      </div>
      
    </div>
  )
}
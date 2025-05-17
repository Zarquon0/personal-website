'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

export default function HeroSection() {
  const containerRef = useRef(null)

  // Watch scroll for this section if needed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', '80% end'],
  })

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex">
        <LeftPanel scrollYProgress={scrollYProgress} />
        <div className="relative w-1/2 bg-light">
          {/* Gold bar positioned on left edge of right panel */}
          <div className="absolute left-0 top-0 h-full w-[10px] bg-primary z-10" />
          <RightPanel />
        </div>
      </div>
    </section>
  )
}

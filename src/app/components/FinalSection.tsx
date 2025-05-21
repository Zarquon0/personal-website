'use client'

import ActivitiesPanel from './ActivitiesPanel';
import HobbiesPanel from './HobbiesPanel';
import { useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function FinalSection() {
  const conatinerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ['start start', '90% end'],
  })
  return (
    <div ref={conatinerRef} className="relative h-[200vh]">
        <section className="sticky top-0 h-screen w-full flex">
        {/* Left Panel */}
        <div className="w-1/2 bg-light relative">
            <ActivitiesPanel scrollYProgress={scrollYProgress}/>
            {/* Gold Divider */}
            <div className="absolute top-0 right-0 h-full w-[10px] bg-primary z-10" />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-dark text-white">
            <HobbiesPanel scrollYProgress={scrollYProgress} />
        </div>
        </section>
    </div>
  );
}
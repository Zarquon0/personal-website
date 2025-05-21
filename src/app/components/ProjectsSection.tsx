'use client'

import JobCard from './JobCard'
import ScrollHeader from './ScrollHeader'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function ExperienceSection() {
  const conatinerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ['start start', '90% end'],
  })

  return (
    <div ref={conatinerRef} className="relative h-[200vh]">
      <section className="h-screen w-full bg-light sticky top-0 overflow-hidden">
        {/* Triangles */}
        <div className="absolute top-0 left-0 w-0 h-0 border-r-[50vw] border-b-[75vh] border-r-transparent border-b-dark z-0 scale-y-[-1]" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[15vw] border-b-[25vh] border-r-transparent border-b-primary z-0" />

        {/* Heading with animated bar */}
        <ScrollHeader text="Projects" colorClass="text-light" scrollYProgress={scrollYProgress}/>
        
        {/* Job Cards */}
        <div className="flex items-center justify-center h-full space-x-8 px-4 z-1">
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Yell"
              company="Thing"
              dates="1"
              description="Worked on frontend and backend systems."
              imageUrl="/brown-cs-icon.png"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Simply Search"
              company="Thing"
              dates="1"
              description="Explored AI ethics and policy frameworks."
              imageUrl="/keewaydin-icon.jpg"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="BOC Website"
              company="Thing"
              dates="1"
              description="Helped students learn systems programming."
              imageUrl="/district-five-icon.png"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Hnefatafl "
              company="Thing"
              dates="1"
              description="Helped students learn systems programming."
              imageUrl="/district-five-icon.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
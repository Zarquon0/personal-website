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
        <div className="absolute top-0 right-0 w-0 h-0 border-r-[50vw] border-b-[75vh] border-r-transparent border-b-dark z-0 rotate-180" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[15vw] border-b-[25vh] border-r-transparent border-b-primary z-0 rotate-270 scale-x-[-1]" />

        {/* Heading with animated bar */}
        <ScrollHeader text="Experience" colorClass="text-dark" scrollYProgress={scrollYProgress}/>
        
        {/* Job Cards */}
        <div className="flex items-center justify-center h-full space-x-8 px-4 z-1">
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Sunlab Consultant"
              company="Brown CS Department"
              dates="09/24-Now"
              description="Worked on frontend and backend systems."
              imageUrl="/brown-cs-icon.png"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Research Assistant"
              company="ACT Lab"
              dates="01/24-03/24"
              description="Explored AI ethics and policy frameworks."
              imageUrl="/act-icon.png"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Tent Staff"
              company="Keewaydin"
              dates="06/24-08/24"
              description="Helped students learn systems programming."
              imageUrl="/keewaydin-icon.jpg"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Mapping Intern"
              company="ATL City Council D5 Office"
              dates="06/22-08/22"
              description="Helped students learn systems programming."
              imageUrl="/district-five-icon.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
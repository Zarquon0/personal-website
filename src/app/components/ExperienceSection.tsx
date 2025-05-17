'use client'

import JobCard from './JobCard'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ExperienceSection() {
  const conatinerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ['start start', '90% end'],
  })

  const barHeight = useTransform(scrollYProgress, [0, 1], [0, 290])

  return (
    <div ref={conatinerRef} className="relative h-[200vh]">
      <section className="h-screen w-full bg-light sticky top-0 overflow-hidden">
        {/* Triangle */}
        <div className="absolute top-0 right-0 w-0 h-0 border-r-[50vw] border-b-[75vh] border-r-transparent border-b-dark z-0 rotate-180" />
        {/* Gold border along hypotenuse */}
        <div className="absolute top-0 right-0 w-[2px] h-[75vh] bg-gold transform rotate-45 origin-top-right z-10" />

        {/* Heading with animated bar */}
        {/* <div className="absolute top-8 left-8">
          <ScrollHeading text="Experience" scrollRef={scrollRef} />
        </div> */}
        <div className="absolute top-8 left-8 z-10">
          <motion.div
            className="absolute left-0 top-[50%] bg-primary h-[2.5rem] z-0"
            style={{ width: barHeight }}
          />
          <h2 className="relative text-5xl font-heading font-bold text-dark z-11">Experiences</h2>
        </div>
        {/* Job Cards */}
        <div className="flex items-center justify-center h-full space-x-8 px-4 z-1">
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Software Engineer"
              company="Thing"
              dates="1"
              description="Worked on frontend and backend systems."
              imageUrl="/brown-cs-icon.png"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Research Intern"
              company="Thing"
              dates="1"
              description="Explored AI ethics and policy frameworks."
              imageUrl="/keewaydin-icon.jpg"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Teaching Assistant"
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
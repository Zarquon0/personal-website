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
        <div className="flex items-center justify-center h-full space-x-8 px-4 z-1 overflow-x-scroll">
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Researcher"
              company="ATLAS Group"
              dates="06/25-Now"
              description="Researching topics at the intersection of systems and PL (the study of programming languages). Currently, under a postdoc's guidance, researching a method of monitoring pipelines in shell scripts for unexpected behavior via an efficient Rust 'stream monitor' and a special 'shell compiler' built in Python, providing benefits in both security and program correctness. We hope to publish a paper on this at a conference in late November."
              imageUrl="/atlas-icon.png"
              linkUrl="https://atlas.cs.brown.edu/"
            />
          </div>
          <div className="shrink-0">
            <JobCard
              title="Project Manager"
              company="Fullstack@Brown"
              dates="09/24-06/25"
              description="Led a group of 13 developers and designers in the creation of a new online platform for the BOC. Duties as PM included coordinating and guiding weekly meetings, leading presentations and mini-lessons, and conducting informal code reviews. The culmination of this year long stint was a fully featured web appication currently being geared up to serve a 2000+ member community and a cohort of 13 newly experienced and skilled front end developers/designers."
              imageUrl="/fsab-icon.png"
              linkUrl="https://www.fullstackatbrown.com/"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Research Assistant"
              company="ACT Lab"
              dates="01/25-04/25"
              description="Assisted in research on the topic of enhancing the perception of a grounded robot via integrating data provided by a mounted LIDAR data and overhead drone imagery. Constructed the ROS infrastructure allowing the drone to broadcast imagery to the ground (Spot) robot and built containerized environments for simulating our system with Docker and Gazebo."
              imageUrl="/act-icon.png"
              linkUrl="https://act.usc.edu/"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Lead TA"
              company="Brown Engineering Dept."
              dates="05/25-Now"
              description="Serving as the right hand assistant to the primary instructors of Brown's ENGN0510 E&M course. Worked as the sole TA with course staff over the summer to prepare administrative resources, manage further TA hiring, and design two original practice exams for the ~160 student class. Currently, I manage the class's online dicussion board, keep all online resources up to date, and lead instructional/problem solving sessions for students."
              imageUrl="/engineering-icon.png"
              linkUrl="https://engineering.brown.edu/"
            />
          </div>
          {/* <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Sunlab Consultant"
              company="Brown CS Department"
              dates="09/24-Now"
              description="Serve as a steward of and liaison to Brown's three computer labs (most notably, the namesake Sunlab) and their 100+ computers. Chief responsibilities include troubleshooting and resolving any issues that come up with the labs' computers and providing technical advice and assistance to the labs' users."
              imageUrl="/brown-cs-icon.png"
              linkUrl="https://cs.brown.edu/degrees/undergrad/jobs/consult/"
            />
          </div> */}
          {/* <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Tent Staff"
              company="Keewaydin"
              dates="06/24-08/24"
              description="Lived with and provided instruction and support to the Waramaug Grove (10-12 age group) of Keewaydin's sleep-away summer camp. Responsibilities included staffing a tent of five campers, leading two instructional activities a day, planning and executing one ~5 day canoeing/hiking trip each month, and most importantly, providing an engaging and guiding presence to the campers."
              imageUrl="/keewaydin-icon.jpg"
              linkUrl="https://keewaydin.org/dunmore/dunmore-overview/"
            />
          </div> */}
          {/* <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Mapping Intern"
              company="ATL City Council D5 Office"
              dates="06/22-08/22"
              description="Learned and utilized ArcGIS to create a map of areas of old growth canopy (trees aged 30+ years notable for providing great environmental benefits) in Atlanta's fifth district. The resulting map would later be used to inform policy decisions regarding canopy coverage in the district."
              imageUrl="/district-five-icon.png"
              linkUrl="https://www.district5atl.com/"
            />
          </div> */}
        </div>
      </section>
    </div>
  )
}
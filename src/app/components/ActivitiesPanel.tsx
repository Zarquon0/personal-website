'use client'

import ScrollHeader from "./ScrollHeader";
import JobCard from "./JobCard";
import { MotionValue } from "framer-motion";

export default function ActivitiesPanel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="h-full p-8 flex flex-col justify-start">
      {/* Header */}
      <ScrollHeader text="Activities" colorClass="text-dark" scrollYProgress={scrollYProgress} maxWidth={240}/>

      {/* Job Cards */}
      <div className="absolute bottom-0 left-0 h-[100%] py-60 flex items-center justify-center pt-16 pb-4 z-1 space-y-8 w-full flex-col overflow-y-scroll overflow-x-hidden">
        {/* Activity Card 1 */}
        <div className="shrink-0">
          <JobCard
            title="Brown Outing Club (BOC)"
            company="Treasurer"
            dates="01/24-Now"
            description="Plan and lead 2+ trips a semester of ~15 participants to hike, run, paddle, or explore one of many marvelous outdoors destinations in the Northeast. In addition to leader duties, my duties as treasurer involve overseeing the club's 40K+ annual budget by approving purchases, crafting the annual budget request, and communicating with vendors and university administrators."
            imageUrl="/boc-icon.png"
            horizontal={true}
            linkUrl="https://brownoutingclub.com/"
          />
        </div>
        <div className="relative p-1 bg-light rounded-[1.7rem]">
          <JobCard
            title="Sunlab Consultant"
            company="Brown CS Department"
            dates="09/24-Now"
            description="Serve as a steward of and liaison to Brown's three computer labs (most notably, the namesake Sunlab) and their 100+ computers. Chief responsibilities include troubleshooting and resolving any issues that come up with the labs' computers and providing technical advice and assistance to the labs' users."
            imageUrl="/brown-cs-icon.png"
            horizontal={true}
            linkUrl="https://cs.brown.edu/degrees/undergrad/jobs/consult/"
          />
        </div>
        {/* <div className="shrink-0">
          <JobCard
            title="FullStack@Brown"
            company="Project Manager"
            dates="09/24-09/25"
            description="Led a group of 13 developers and designers in the creation of a new online platform for the BOC. Duties as PM included coordinating and guiding weekly meetings, leading presentations and mini-lessons, and conducting informal code reviews. The culmination of this year long stint was a fully featured web appication currently being geared up to serve a 2000+ member community and a cohort of 13 newly experienced and skilled front end developers/designers."
            imageUrl="/fsab-icon.png"
            horizontal={true}
            linkUrl="https://www.fullstackatbrown.com/"
          />
        </div> */}
      </div>
    </div>
  );
}
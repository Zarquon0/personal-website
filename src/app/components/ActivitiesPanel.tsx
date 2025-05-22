'use client'

import ScrollHeader from "./ScrollHeader";
import JobCard from "./JobCard";

export default function ActivitiesPanel({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="h-full p-8 flex flex-col justify-start">
      {/* Header */}
      <ScrollHeader text="Activities" colorClass="text-dark" scrollYProgress={scrollYProgress} maxWidth={240}/>

      {/* Job Cards */}
      <div className="absolute bottom-0 left-0 h-[100%] flex items-center justify-center pt-16 pb-4 z-1 space-y-8 w-full flex-col overflow-hidden">
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
        <div className="shrink-0">
          <JobCard
            title="FullStack@Brown"
            company="Project Manager"
            dates="09/24-Now"
            description="Guide, delegate to, and coordinate the efforts of a team of 12 developers and 3 designers in the formation a production worthy website. While never actually an official member of the club, through my solicitation of the club to aid with the BOC's new website, I have occupied this role alongside my co-PM, fulfilling these duties in addition to directly designing and implementing the site's backend."
            imageUrl="/fsab-icon.png"
            horizontal={true}
            linkUrl="https://www.fullstackatbrown.com/"
          />
        </div>
      </div>
    </div>
  );
}
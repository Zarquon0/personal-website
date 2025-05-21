'use client'

import ScrollHeader from "./ScrollHeader";
import JobCard from "./JobCard";

export default function ActivitiesPanel({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="h-full p-8 flex flex-col justify-start">
      {/* Header */}
      <ScrollHeader text="Activities" colorClass="text-dark" scrollYProgress={scrollYProgress}/>

      {/* Job Cards */}
      <div className="absolute bottom-0 left-0 h-[100%] flex items-center justify-center pt-16 pb-4 z-1 space-y-8 w-full flex-col overflow-hidden">
        {/* Activity Card 1 */}
        <div className="shrink-0">
          <JobCard
            title="Sunlab Consultant"
            company="Brown CS Department"
            dates="09/24-Now"
            description="Worked on frontend and backend systems."
            imageUrl="/brown-cs-icon.png"
            horizontal={true}
          />
        </div>
        <div className="shrink-0">
          <JobCard
            title="Sunlab Consultant"
            company="Brown CS Department"
            dates="09/24-Now"
            description="Worked on frontend and backend systems."
            imageUrl="/brown-cs-icon.png"
            horizontal={true}
          />
        </div>

        {/* <div className="bg-white border-2 border-black p-6 w-full h-40 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold">Activity Title 1</h3>
          <p className="text-sm text-gray-600">Company Name — Dates</p>
          <p className="mt-2 text-gray-700">Brief description of the activity.</p>
        </div> */}

        {/* Activity Card 2 */}
        {/* <div className="bg-white border-2 border-black p-6 w-full h-40 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold">Activity Title 2</h3>
          <p className="text-sm text-gray-600">Company Name — Dates</p>
          <p className="mt-2 text-gray-700">Brief description of the activity.</p>
        </div> */}
      </div>
    </div>
  );
}
'use client'

import JobCard from './JobCard'

export default function ExperienceSection() {
  return (
    <section className="h-screen w-full bg-white sticky top-0 overflow-hidden">
      {/* Triangular Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-l-[150px] border-t-transparent border-l-black z-0" />

      {/* Header */}
      <div className="absolute top-4 right-4 text-2xl font-bold text-gray-800 z-10">
        Experiences
      </div>

      {/* Job Cards */}
      <div className="flex items-center justify-center h-full space-x-8 px-4">
        <JobCard
          title="Software Engineer"
          description="Worked on frontend and backend systems."
          imageUrl="/images/job1.jpg"
        />
        <JobCard
          title="Research Intern"
          description="Explored AI ethics and policy frameworks."
          imageUrl="/images/job2.jpg"
        />
        <JobCard
          title="Teaching Assistant"
          description="Helped students learn systems programming."
          imageUrl="/images/job3.jpg"
        />
      </div>
    </section>
  )
}
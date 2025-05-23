'use client'

import NameReveal from './NameReveal'
import ProfileImage from './ProfileImage'
import { MotionValue } from "framer-motion";

export default function LeftPanel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="w-1/2 bg-dark flex flex-col">
      <div className="h-1/3 flex items-center justify-center">
        <NameReveal />
      </div>
      <div className="h-2/3 flex items-center justify-center relative overflow-visible">
        <ProfileImage scrollYProgress={scrollYProgress} />
      </div>
    </div>
  )
}
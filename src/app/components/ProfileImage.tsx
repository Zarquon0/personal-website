'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'

export default function ProfileImage({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const x = useTransform(scrollYProgress, [0, 1], ['-40vw', '0vw'])
  const rotate = useTransform(scrollYProgress, [0, 1], ['-270deg', '0deg'])

  return (
    <motion.div
      style={{ x, rotate }}
      className="w-80 h-80 absolute rounded-full border-4 border-primary overflow-hidden"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}
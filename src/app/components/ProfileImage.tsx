'use client'

import { motion, useTransform } from 'framer-motion'

export default function ProfileImage({ scrollYProgress }: { scrollYProgress: any }) {
  const x = useTransform(scrollYProgress, [0, 1], ['-25vw', '0vw'])
  const rotate = useTransform(scrollYProgress, [0, 1], ['-180deg', '0deg'])

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
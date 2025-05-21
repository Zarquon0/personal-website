'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BackToTop() {
    const [hovered, setHovered] = useState(false)

    const spinnyTriangle = (
        <div className="transform scale-150">
        <motion.div 
        animate={{ rotate: (hovered ? 360 : 0) }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-white"
        />
        </div>
    )
    return (
        <a 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href="#hero" 
        className="w-full h-20 flex justify-around items-center bg-primary"
        >
            { spinnyTriangle }
            <span className={`text-dark font-heading text-2xl ${hovered ? 'animate-pulse' : ''}`}>Back to Top</span>
            { spinnyTriangle }
        </a>
    )
}
'use client'

import HobbyDisplay from './HobbyDisplay';
import ScrollHeader from './ScrollHeader';
import ContactMe from './ContactMe';
import { MotionValue } from "framer-motion";

export default function HobbiesPanel({ scrollYProgress }:{ scrollYProgress: MotionValue<number> }) {
  return (
    <div className="h-full p-8 flex flex-col justify-between relative">
      {/* Header */}
      <ScrollHeader text="Hobbies" colorClass="text-light" scrollYProgress={scrollYProgress} maxWidth={200}/>
      <div className="mt-32 flex flex-col justify-between h-[calc(100%-8rem)]">
        {/* Hobby Display */}
        <div className="mr-16">
            <HobbyDisplay />
        </div>

        {/* Separator */}
        <div className="w-[50%] h-[2px] bg-primary mx-auto" />

        {/* Contact Button */}
        <ContactMe />
        
      </div>
    </div>
  );
}
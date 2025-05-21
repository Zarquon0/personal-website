'use client'

import HobbyDisplay from './HobbyDisplay';
import ScrollHeader from './ScrollHeader';
import ContactMe from './ContactMe';

export default function HobbiesPanel({ scrollYProgress }:{ scrollYProgress: any }) {
  return (
    <div className="h-full p-8 flex flex-col justify-between relative">
      {/* Header */}
      <ScrollHeader text="Hobbies" colorClass="text-light" scrollYProgress={scrollYProgress}/>
      <div className="mt-24">
        {/* Hobby Display */}
        <div className="mr-16">
            <HobbyDisplay />
        </div>

        {/* Separator */}
        <div className="w-[50%] h-[2px] bg-primary my-16 mx-auto" />

        {/* Contact Button */}
        {/* <a
            href="mailto:your.email@example.com"
            className="self-start bg-primary text-dark px-6 py-3 rounded hover:bg-dark transition-colors duration-300"
        >
            Contact Me
        </a> */}
        <ContactMe />
        
      </div>
    </div>
  );
}
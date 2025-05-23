'use client'

import { useState, useEffect } from 'react';

const hobbies = [
  { name: 'Climbing', image: '/climbing.jpeg', cap: "Trying not to cheesegrater on a dicey slab" },
  { name: 'Piano', image: '/rach.jpg', cap: "Intense mood lighting for Rachmaninoff" },
  { name: '3D Printing & Modeling', image: '/puzzle-box.jpeg', cap: "Components of a 3D printed puzzle box" },
  { name: 'Board Games', image: '/board-games.jpeg', cap: "The board game collection's starting to overflow" },
  // Add more hobbies as needed
];

export default function HobbyDisplay() {
  const [activeHobby, setActiveHobby] = useState(hobbies[0]);
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return // stop cycling when hovered

    const interval = setInterval(() => {
      setActiveHobby((current) => {
        const currIdx = hobbies.findIndex((h) => h.name === current.name)
        const nextIdx = (currIdx + 1) % hobbies.length
        return hobbies[nextIdx]
      })
    }, 4000)

    return () => clearInterval(interval) // cleanup when hovered changes
  }, [hovered])

  return (
    <div 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="flex w-full h-64"
    >
      {/* Hobby List */}
      <ul className="w-1/3 flex flex-col space-y-4">
        {hobbies.map((hobby) => {
            const isActive = activeHobby.name === hobby.name
            return (
            <li
                key={hobby.name}
                onMouseEnter={() => setActiveHobby(hobby)}
                className="relative cursor-pointer text-2xl pl-2"
            >
                {/* Sliding gold background */}
                <span
                className={`absolute left-0 top-0 h-full w-full bg-primary rounded-md transition-all duration-300 z-0 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                } origin-left`}
                />
                <span className="relative z-10 text-white">{hobby.name}</span>
            </li>
            )
        })}
      </ul>
      {/* Hobby Image */}
      <div className="w-2/3 flex items-center justify-center">
        <div className="relative aspect-square h-full border-4 border-primary rounded-2xl overflow-hidden">
          <img
            src={activeHobby.image}
            alt={activeHobby.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 h-1/4 w-full bg-black bg-opacity-80 text-white text-sm p-3 overflow-scroll">
            <p className="text-white italic text-sm">{activeHobby.cap}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
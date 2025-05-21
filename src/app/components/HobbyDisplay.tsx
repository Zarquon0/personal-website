'use client'

import { useState } from 'react';

const hobbies = [
  { name: 'Climbing', image: '/district-five-icon.png' },
  { name: 'Piano', image: '/act-icon.png' },
  { name: '3D Printing & Modeling', image: '/keewaydin-icon.jpg' },
  { name: 'Board Games', image: '/keewaydin-icon.jpg' },
  // Add more hobbies as needed
];

export default function HobbyDisplay() {
  const [activeHobby, setActiveHobby] = useState(hobbies[0]);

  return (
    <div className="flex w-full h-64">
      {/* Hobby List */}
      <ul className="w-1/3 flex flex-col space-y-4">
        {hobbies.map((hobby) => {
            const isActive = activeHobby.name === hobby.name
            return (
            <li
                key={hobby.name}
                onMouseEnter={() => setActiveHobby(hobby)}
                className="relative cursor-pointer text-2xl"
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
        <img
            src={activeHobby.image}
            alt={activeHobby.name}
            className="h-full object-cover rounded-2xl border-4 border-primary aspect-square"
        />
      </div>
    </div>
  );
}
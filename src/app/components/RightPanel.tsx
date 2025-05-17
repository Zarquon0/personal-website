'use client'

import TextCarousel from './TextCarousel'

export default function RightPanel() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-lg flex flex-col items-start space-y-6 text-left">
        {/* Quick bio */}
        <p className="text-dark text-3xl font-body tracking-wide leading-loose">
          Student in Providence, RI. <br/> Brother and son in Atlanta, GA. <br/> Maker everywhere.
        </p>
        {/* Separator line */}
        <hr className="w-1/2 border-t border-black"/>
        {/* Interests Carousel */}
        <TextCarousel
          sourceItems={['Robotics', '3D Modeling & Printing', 'Systems Programming', 'Web Dev', 'Deep Learning', 'Piano']}
        />

        {/* Scroll Prompt */}
        <p className="text-sm font-body text-gray-500 mt-8 max-w-lg">
          See what I've been up to ↓
        </p>
      </div>
    </div>
  )
}
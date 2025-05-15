'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="text-center space-y-4">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={120}
        height={120}
        className="mx-auto rounded-full"
      />
      <h1 className="text-4xl font-bold text-primary">Your Name</h1>
      <p className="text-lg text-gray-600">
        CS & Engineering Enthusiast | Passionate about building digital experiences
      </p>
    </section>
  )
}

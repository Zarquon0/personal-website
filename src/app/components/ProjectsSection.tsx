'use client'

import JobCard from './JobCard'
import ScrollHeader from './ScrollHeader'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function ExperienceSection() {
  const conatinerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ['start start', '90% end'],
  })

  return (
    <div ref={conatinerRef} className="relative h-[200vh]">
      <section className="h-screen w-full bg-light sticky top-0 overflow-hidden">
        {/* Triangles */}
        <div className="absolute top-0 left-0 w-0 h-0 border-r-[50vw] border-b-[75vh] border-r-transparent border-b-dark z-0 scale-y-[-1]" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[15vw] border-b-[25vh] border-r-transparent border-b-primary z-0" />

        {/* Heading with animated bar */}
        <ScrollHeader text="Projects" colorClass="text-light" scrollYProgress={scrollYProgress}/>
        
        {/* Job Cards */}
        <div className="flex items-center justify-center h-full space-x-8 px-4 z-1">
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Project Yell"
              company="Group Final Project"
              dates="03/25-04/25"
              description="An adversarial audio perturbation model designed to target speech-to-text models (namely, OpenAI's Whisper) such that audio passed through it could be deciphered by humans but uninterpretable to such models. Used PyTorch to implement a novel Evolution Strategies based black box optimization approach to the problem. Presented findings at a public poster presentation event."
              imageUrl="/team-yell-poster.png"
              linkUrl="https://github.com/spoonmilk/team-yell"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="Simply Search"
              company="Solo Final Project"
              dates="11/24-12/24"
              description="A web crawler coupled with a basic search interface for parsing through the crawler's finds. The concurrent and efficient crawler, an independent command line utility on its own, was built in Rust while the search interface was built with Flask, SQLite, and a vanilla frontend stack. Not quite Google, but close enough 🤷‍♂️."
              imageUrl="/simply-search.png"
              linkUrl="https://github.com/Zarquon0/crawl-and-search"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="BOC Website"
              company="Project Manager"
              dates="09/24-Now"
              description="A website for the Brown Outing Club designed as an upgrade from the club's current static site to a platform where trips can be created, planned, signed up for, and run all in one place. The site uses a modern Next/React + Tailwind frontend stack and an Express + MariaDB backend (to be run on a Google Cloud Compute VM) supplemented by Google Firestore for larger files. The site is not quite ready for deployment yet, but we hope to launch it this coming fall semester!"
              imageUrl="/boc-website.png"
              linkUrl="https://github.com/orgs/fullstackatbrown/teams/brown-outing-club/repositories"
            />
          </div>
          <div className="relative p-1 bg-light rounded-[1.7rem]">
            <JobCard
              title="IP/TCP"
              company="Pair Project"
              dates="09/24-11/24"
              description="A complete RFC compliant implementation of TCP/IP in Rust. UDP connections between localhost ports stand in for virtual link layer connections between virtual hosts and routers able to communicate with each other over fully featured TCP sockets through a simple REPL interface. While not original in concept like all other projects here, the project's implementation was stencil-less and thus, entirely original in that way."
              imageUrl="/tcp-wireshark.png"
              linkUrl="https://github.com/spoonmilk/tcp"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
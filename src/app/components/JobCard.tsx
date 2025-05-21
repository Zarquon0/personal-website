'use client'

import { useState } from 'react'
import clsx from 'clsx'

export default function JobCard({
  title,
  company,
  dates,
  description,
  imageUrl,
  horizontal = false,
}: {
  title: string
  company: string
  dates: string
  description: string
  imageUrl: string
  horizontal?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const widthHeight = (horizontal ? " w-80 h-56" : " w-64 h-80")
  const expandedWidthHeight = (horizontal ? " w-[28rem] h-68" : " w-[28rem] h-[28rem]")
  return (
    <div
      className={clsx(
        'group relative bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 border-4 border-dark' + widthHeight,
        hovered && ('z-10 shadow-[0_0_25px_5px_#D8CA0A]' + expandedWidthHeight)
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Title Band */}
      <div
        className={clsx(
          'absolute left-0 w-full h-20 bg-black text-white px-6 transition-all duration-500 flex items-center',
          hovered ? 'top-0' : 'top-1/2 transform -translate-y-1/2'
        )}
      >
        {/* Block of title + metadata */}
        <div className="flex flex-col text-left mx-auto transition-[font-size] duration-300 ease-in-out">
            <span className={clsx('font-semibold', hovered ? 'text-xl' : 'text-lg')}>
                {title}
            </span>
            <span className={clsx('text-gray-300', hovered ? 'text-base' : 'text-sm')}>
                {company} &mdash; {dates}
            </span>
        </div>
        {/* <div className="flex flex-col text-left mx-auto">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-sm text-gray-300">
            {company} &mdash; {dates}
          </span>
        </div> */}
      </div>

      {/* Description Area */}
      <div
        className={clsx(
          'absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white text-sm p-4 overflow-hidden transition-all duration-500',
          hovered ? 'h-1/2 opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  )
}

function HJobCard({
  title,
  company,
  dates,
  description,
  imageUrl,
}: {
  title: string
  company: string
  dates: string
  description: string
  imageUrl: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={clsx(
        'group relative w-80 h-64 bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 border-4 border-dark',
        hovered && 'w-[28rem] h-[28rem] z-10 shadow-[0_0_25px_5px_#D8CA0A]'
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Title Band */}
      <div
        className={clsx(
          'absolute left-0 w-full h-20 bg-black text-white px-6 transition-all duration-500 flex items-center',
          hovered ? 'top-0' : 'top-1/2 transform -translate-y-1/2'
        )}
      >
        {/* Block of title + metadata */}
        <div className="flex flex-col text-left mx-auto transition-[font-size] duration-300 ease-in-out">
            <span className={clsx('font-semibold', hovered ? 'text-xl' : 'text-lg')}>
                {title}
            </span>
            <span className={clsx('text-gray-300', hovered ? 'text-base' : 'text-sm')}>
                {company} &mdash; {dates}
            </span>
        </div>
        {/* <div className="flex flex-col text-left mx-auto">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-sm text-gray-300">
            {company} &mdash; {dates}
          </span>
        </div> */}
      </div>

      {/* Description Area */}
      <div
        className={clsx(
          'absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white text-sm p-4 overflow-hidden transition-all duration-500',
          hovered ? 'h-1/2 opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  )
}
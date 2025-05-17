/*'use client'

import { useAnimationFrame } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Word = {
  key: number
  text: string
  x: number // Position offset in pixels
}

export default function TextCarousel({ sourceItems }: { sourceItems: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<Map<number, HTMLSpanElement>>(new Map())
  const gen = useRef(infiniteItemGenerator(sourceItems))

  const [words, setWords] = useState<Word[]>([])
  const speed = 0.05
  const counter = useRef(0)

  useEffect(() => {
    // Start with enough words to fill container
    setWords([
      { key: counter.current++, text: gen.current.next().value, x: 0 },
      { key: counter.current++, text: gen.current.next().value, x: 150 },
      { key: counter.current++, text: gen.current.next().value, x: 300 },
    ])
  }, [sourceItems])

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return

    setWords(prevWords => {
      const updated = prevWords
        .map(word => ({ ...word, x: word.x - speed * delta }))
        .filter(word => {
          const el = wordRefs.current.get(word.key)
          if (!el) return true
          const rect = el.getBoundingClientRect()
          return rect.right > 0 // Keep if still partially on screen
        })

      const lastWord = updated[updated.length - 1]
      const lastEl = wordRefs.current.get(lastWord?.key ?? 0)
      const lastRight = lastEl?.getBoundingClientRect().right ?? 0
      const containerRight = containerRef.current!.getBoundingClientRect().right

      if (lastRight < containerRight) {
        updated.push({
          key: counter.current++,
          text: gen.current.next().value,
          x: lastWord.x + 150, // adjust spacing here
        })
      }

      return updated
    })
  })

  return (
    <div ref={containerRef} className="w-full max-w-md h-10 overflow-hidden relative">
      {words.map(word => (
        <span
          key={word.key}
          ref={el => {
            if (el) wordRefs.current.set(word.key, el)
          }}
          className="text-lg text-primary font-semibold absolute top-0"
          style={{ transform: `translateX(${word.x}px)` }}
        >
          {word.text}
        </span>
      ))}
    </div>
  )
}

function* infiniteItemGenerator(source: string[]): Generator<string> {
  let i = 0
  while (true) {
    yield source[i % source.length]
    i++
  }
}*/

'use client'

import { motion, useAnimationFrame } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function TextCarousel({ sourceItems }: { sourceItems: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const tracktainerRef = useRef<HTMLDivElement>(null)
    const track1Ref = useRef<HTMLDivElement>(null)
    const track2Ref = useRef<HTMLDivElement>(null)
    const [items1, setItems1] = useState<string[]>([])
    const [items2, setItems2] = useState<string[]>([])
  
    const gen = useRef(infiniteItemGenerator(sourceItems))
    const x = useRef(0)
    const order = useRef(0)
    const speed = 0.05
  
    useEffect(() => {
      // Start with a few items
      setItems1([gen.current.next().value, gen.current.next().value, gen.current.next().value, ""])
      setItems2([gen.current.next().value, gen.current.next().value, gen.current.next().value, ""])
    }, [sourceItems])
    useAnimationFrame((_, delta) => {
      if (!tracktainerRef.current || !track1Ref.current || !track2Ref.current || !containerRef.current) return

      const track1RightEdge = track1Ref.current.getBoundingClientRect().right
      const track2RightEdge = track2Ref.current.getBoundingClientRect().right
      const containerLeftEdge = containerRef.current.getBoundingClientRect().left

      if (track2RightEdge <= containerLeftEdge) { //reset transform and refresh track 2
        order.current = 0;
        x.current = 0;
        setItems2([gen.current.next().value, gen.current.next().value, gen.current.next().value, ""]);
      } else if (track1RightEdge <= containerLeftEdge) { //switch order of tracks and refresh track 1
        order.current = 1; 
        x.current = 0;
        setItems1([gen.current.next().value, gen.current.next().value, gen.current.next().value, ""]);
      } 
      x.current -= speed * delta;
      tracktainerRef.current.style.transform = `translateX(${x.current}px)`   
    })
    let track1 = <div ref={track1Ref} className="flex gap-12 whitespace-nowrap will-change-transform">{items1.map((item, idx) => <span key={idx} className="text-2xl text-primary font-semibold">{item}</span>)}</div>
    let track2 = <div ref={track2Ref} className="flex gap-12 whitespace-nowrap will-change-transform">{items2.map((item, idx) => <span key={idx} className="text-2xl text-primary font-semibold">{item}</span>)}</div>
    return (
        <div ref={containerRef} className="w-full max-w-md overflow-hidden">
          <div ref={tracktainerRef} className="flex whitespace-nowrap will-change-transform">
            {order.current === 0 ? track1 : track2}
            {order.current === 0 ? track2 : track1}
          </div>
        </div>
      )
  }
  
  // Infinite generator helper
  function* infiniteItemGenerator(source: string[]): Generator<string> {
    let i = 0
    while (true) {
      if (i >= source.length) { i = 0 }
      yield source[i]
      i++
    }
  }
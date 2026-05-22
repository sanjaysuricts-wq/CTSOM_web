// 'use client'

import { useEffect, useState } from 'react'

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full bg-accent transition-transform duration-75"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}
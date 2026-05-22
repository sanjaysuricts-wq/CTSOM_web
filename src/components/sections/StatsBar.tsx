// 'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { STATS } from '@/lib/constants'

interface StatsBarProps {
  variant?: 'light' | 'dark'
}

function useCountUp(target: number, isVisible: boolean, duration = 800) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return count
}

function StatItem({
  value,
  suffix,
  label,
  isVisible,
  variant,
}: {
  value: number
  suffix: string
  label: string
  isVisible: boolean
  variant: 'light' | 'dark'
}) {
  const count = useCountUp(value, isVisible)

  return (
    <div className="flex flex-col items-center px-4 py-2 text-center">
      <span
        className={cn(
          'font-heading text-4xl font-bold md:text-5xl',
          variant === 'dark' ? 'text-accent' : 'text-primary'
        )}
      >
        {count}
        {suffix}
      </span>
      <span
        className={cn(
          'mt-2 font-body text-sm uppercase tracking-wider',
          variant === 'dark' ? 'text-white/80' : 'text-primary-300'
        )}
      >
        {label}
      </span>
    </div>
  )
}

export default function StatsBar({ variant = 'dark' }: StatsBarProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <section
      ref={ref}
      className={cn(
        'py-8',
        variant === 'dark' ? 'bg-primary' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

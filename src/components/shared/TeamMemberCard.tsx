
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  initials: string
  image?: string
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  initials,
  image,
}: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Avatar area */}
      <div className="flex justify-center pt-8">
        {image ? (
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-neutral-100 transition-all duration-300 group-hover:ring-accent/30">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        ) : (
          <div
            className={cn(
              'flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-heading font-bold text-white',
              'ring-4 ring-neutral-100 transition-all duration-300 group-hover:ring-accent/30'
            )}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="font-heading text-lg font-semibold text-primary">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent-600">
          {role}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {bio}
        </p>
      </div>
    </motion.div>
  )
}

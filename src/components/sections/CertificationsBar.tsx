'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/constants'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export default function CertificationsBar() {
  return (
    <section className="bg-neutral-50 py-16 hidden sm:block">
      <div className=" mx-auto w-full  px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          Certifications & Accreditations
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-wrap items-stretch justify-center gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="flex min-w-[200px] flex-1 items-center gap-4 rounded-xl border border-neutral-100 bg-white px-6 py-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:max-w-xs"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-primary">
                  {cert.name}
                </h3>
                <p className="mt-0.5 font-body text-xs text-primary-300">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

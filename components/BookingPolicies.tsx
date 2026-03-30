'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const policies = [
  {
    num: '01',
    title: 'Payments',
    body: 'A 30% advance secures your slot. Balance is due on the day. We accept UPI, cash, and cards.',
  },
  {
    num: '02',
    title: 'Cancellations',
    body: 'Cancel 24+ hours ahead for a full refund. Within 24 hours, the advance is forfeited. No-shows are non-refundable.',
  },
  {
    num: '03',
    title: 'Before You Arrive',
    body: 'Please come with clean, bare nails. Existing enhancements need removal time — mention it when booking.',
  },
  {
    num: '04',
    title: 'Late Arrivals',
    body: '10-minute grace period. Beyond that, your session may be shortened or rescheduled out of respect for other clients.',
  },
  {
    num: '05',
    title: 'Health & Safety',
    body: 'All tools are sterilised between every client. Please flag any allergies, sensitivities, or nail conditions at booking.',
  },
]

export default function BookingPolicies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-36 lg:py-44 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#4A3228]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            Policies
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#4A3228]">
            §04
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-[#F5EFE6] tracking-[-0.03em] leading-[0.95] mb-20"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Good to know
          <br />
          <span className="italic text-[#8B6552]">before you book.</span>
        </motion.h2>

        {/* Policy list — numbered rows */}
        <div>
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="grid grid-cols-[40px_1fr_1fr] lg:grid-cols-[60px_1fr_2fr] gap-8 lg:gap-16 py-8 border-b border-[#3A2518] hover:border-[#8B6552]/30 transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-serif text-[13px] text-[#4A3228] tabular-nums pt-0.5">
                {policy.num}
              </span>

              {/* Title */}
              <p className="font-serif text-[clamp(1rem,1.8vw,1.2rem)] text-[#F5EFE6] font-light tracking-[-0.01em] leading-snug">
                {policy.title}
              </p>

              {/* Body */}
              <p className="font-sans text-[13.5px] text-[#8B6552] leading-[1.85] font-light">
                {policy.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

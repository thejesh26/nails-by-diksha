'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const policies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Payments',
    body:
      'A 30% advance is required to confirm your booking. The balance is due on the day of your appointment. We accept UPI, cash, and cards.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Cancellations',
    body:
      'Cancellations made 24+ hours in advance receive a full advance refund. Cancellations within 24 hours forfeit the advance. No-shows are non-refundable.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Appointment Rules',
    body:
      'Please arrive with clean, bare nails (no existing gel or polish). Old enhancements require removal time — add this to your booking. No extra guests please.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Late Arrivals',
    body:
      'A grace period of 10 minutes is allowed. Beyond that, your appointment may be shortened or rescheduled to avoid disrupting other clients.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Health & Safety',
    body:
      'All tools are sterilised between clients. If you have any nail conditions, allergies, or sensitivities — please mention it at the time of booking.',
  },
]

export default function BookingPolicies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            Important Information
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#F5EFE6]">
            Booking Policies
          </h2>
          <div className="w-10 h-px bg-[#8B6552] mx-auto mt-6" />
        </motion.div>

        {/* Policy Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {policies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col gap-4 p-6 border border-[#4A3228] rounded-2xl hover:border-[#8B6552] transition-all duration-300 bg-[#1A0E08]/40"
            >
              <div className="w-10 h-10 rounded-xl bg-[#4A3228] group-hover:bg-[#8B6552] transition-colors duration-300 flex items-center justify-center text-[#CEC0AF] group-hover:text-[#F5EFE6]">
                {policy.icon}
              </div>
              <h3 className="font-serif text-lg text-[#F5EFE6]">{policy.title}</h3>
              <p className="font-sans text-sm text-[#CEC0AF] leading-relaxed font-light flex-1">
                {policy.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

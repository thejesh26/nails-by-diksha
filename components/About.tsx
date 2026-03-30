'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-36 lg:py-44 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule + label row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#E0D5C8]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            About
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/40">
            §01
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[5fr_4fr] gap-16 lg:gap-24 items-start">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-serif font-light text-[#2C1810] leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)' }}
            >
              Nails as a form
              <br />
              of{' '}
              <span className="italic text-[#8B6552]">self-expression.</span>
            </h2>
          </motion.div>

          {/* Text columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 pt-2 lg:pt-4"
          >
            <p className="font-sans text-[15px] text-[#6B4C3B] leading-[1.9] font-light">
              Hi, I&apos;m Diksha — a nail artist with four years of experience creating
              bespoke nail looks. My studio is a calm, one-on-one space where your
              appointment is never rushed.
            </p>
            <p className="font-sans text-[15px] text-[#6B4C3B] leading-[1.9] font-light">
              I work with only premium, skin-safe products — and every design is
              a conversation. Bring a reference, bring a mood, or let me guide you.
            </p>

            <div className="pt-6">
              <button
                onClick={() => {
                  const el = document.querySelector('#booking')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.2em] uppercase text-[#2C1810]"
              >
                <span className="w-8 h-8 rounded-full border border-[#CEC0AF] group-hover:border-[#2C1810] flex items-center justify-center transition-colors duration-300">
                  <span className="text-[#8B6552] group-hover:text-[#2C1810] transition-colors duration-300 text-xs">→</span>
                </span>
                Book a session
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats row — editorial, minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-[#E0D5C8] grid grid-cols-3 gap-8 lg:gap-0 lg:flex lg:items-end"
        >
          {[
            { number: '500+', label: 'Clients served' },
            { number: '4 yrs', label: 'Experience' },
            { number: '50+', label: 'Designs' },
          ].map((stat, i) => (
            <div key={stat.label} className={i > 0 ? 'lg:ml-16' : ''}>
              <p className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light text-[#2C1810] tracking-[-0.04em] leading-none">
                {stat.number}
              </p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B6552]/60 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

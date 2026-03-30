'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const hours = [
  { day: 'Monday', time: '10:00 – 19:00' },
  { day: 'Tuesday', time: '10:00 – 19:00' },
  { day: 'Wednesday', time: '10:00 – 19:00' },
  { day: 'Thursday', time: '10:00 – 19:00' },
  { day: 'Friday', time: '10:00 – 20:00' },
  { day: 'Saturday', time: '09:00 – 20:00' },
  { day: 'Sunday', time: 'Closed' },
]

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-36 lg:py-44 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#E0D5C8]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            Find Us
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/40">
            §08
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left: Heading + contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-serif font-light text-[#2C1810] tracking-[-0.03em] leading-[0.95] mb-16"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              Come find
              <br />
              <span className="italic text-[#8B6552]">the studio.</span>
            </h2>

            <div className="space-y-10">
              {/* Phone */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/50 mb-2">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-serif text-[clamp(1.3rem,2.5vw,1.8rem)] text-[#2C1810] hover:text-[#8B6552] transition-colors duration-300 tracking-[-0.02em]"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Instagram */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/50 mb-2">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/nailsbydiksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-[clamp(1.3rem,2.5vw,1.8rem)] text-[#2C1810] hover:text-[#8B6552] transition-colors duration-300 tracking-[-0.02em]"
                >
                  @nailsbydiksha
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/50 mb-2">
                  Studio
                </p>
                <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-[#2C1810] tracking-[-0.02em] leading-snug">
                  123, Studio Lane
                </p>
                <p className="font-sans text-[13px] text-[#6B4C3B] font-light mt-1">
                  Near XYZ Landmark, Mumbai — 400001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B6552] hover:text-[#2C1810] transition-colors mt-3 inline-block underline underline-offset-[5px] decoration-[#CEC0AF] hover:decoration-[#2C1810]"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Business Hours — editorial list, no card box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/50 mb-8">
              Studio Hours
            </p>

            <div>
              {hours.map((h, i) => {
                const isToday = h.day === today
                const isClosed = h.time === 'Closed'
                return (
                  <div
                    key={h.day}
                    className={`flex items-baseline justify-between py-4 border-b border-[#E8E0D6] ${
                      isToday ? 'border-b-[#8B6552]/30' : ''
                    }`}
                  >
                    <span className={`font-sans text-[13px] ${
                      isToday ? 'text-[#2C1810]' : 'text-[#6B4C3B]/60'
                    } font-light tracking-wide`}>
                      {h.day}
                      {isToday && (
                        <span className="ml-2 font-sans text-[9px] tracking-[0.2em] uppercase text-[#8B6552]">
                          · Today
                        </span>
                      )}
                    </span>
                    <span className={`font-serif text-[clamp(0.9rem,1.6vw,1.1rem)] tracking-[-0.01em] ${
                      isClosed
                        ? 'text-[#CEC0AF]'
                        : isToday
                        ? 'text-[#8B6552]'
                        : 'text-[#6B4C3B]/60'
                    }`}>
                      {h.time}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="font-sans text-[11px] text-[#8B6552]/50 leading-relaxed mt-8">
              Holiday hours vary. Follow{' '}
              <a href="https://instagram.com/nailsbydiksha" className="underline underline-offset-2">
                @nailsbydiksha
              </a>{' '}
              for updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

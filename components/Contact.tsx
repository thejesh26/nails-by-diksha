'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const hours = [
  { day: 'Monday', time: '10:00 AM – 7:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 7:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 7:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 7:00 PM' },
  { day: 'Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#2C1810]">
            Find Us
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-[#EDE3D5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#8B6552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B6552] mb-1">Phone / WhatsApp</p>
                  <a
                    href="tel:+919876543210"
                    className="font-serif text-xl text-[#2C1810] hover:text-[#8B6552] transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                  <p className="font-sans text-xs text-[#8B6552] mt-1">
                    WhatsApp preferred for faster replies
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-[#EDE3D5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#8B6552]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B6552] mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/nailsbydiksha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl text-[#2C1810] hover:text-[#8B6552] transition-colors duration-200"
                  >
                    @nailsbydiksha
                  </a>
                  <p className="font-sans text-xs text-[#8B6552] mt-1">
                    DMs open for bookings & enquiries
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-[#EDE3D5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#8B6552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B6552] mb-1">Studio Address</p>
                  <p className="font-serif text-xl text-[#2C1810]">123, Studio Lane</p>
                  <p className="font-sans text-sm text-[#6B4C3B] mt-1">
                    Near XYZ Landmark, Mumbai — 400001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-widest uppercase text-[#8B6552] hover:text-[#2C1810] transition-colors mt-2 inline-block underline underline-offset-4"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B6552] mb-6">
              Business Hours
            </h3>
            <div className="border border-[#E0D5C8] rounded-2xl overflow-hidden bg-[#F9F3EC]">
              {hours.map((h, i) => {
                const isToday = h.day === today
                const isClosed = h.time === 'Closed'
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i !== hours.length - 1 ? 'border-b border-[#E0D5C8]' : ''
                    } ${isToday ? 'bg-[#EDE3D5]/60' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B6552] flex-shrink-0" />
                      )}
                      <span className={`font-sans text-sm ${isToday ? 'text-[#2C1810] font-medium' : 'text-[#6B4C3B] font-light'}`}>
                        {h.day}
                        {isToday && (
                          <span className="font-sans text-[10px] tracking-widest uppercase text-[#8B6552] ml-2">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span className={`font-sans text-sm ${isClosed ? 'text-[#CEC0AF]' : isToday ? 'text-[#8B6552] font-medium' : 'text-[#6B4C3B] font-light'}`}>
                      {h.time}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-5 border border-[#E0D5C8] rounded-xl bg-[#EDE3D5]/40">
              <p className="font-sans text-xs text-[#6B4C3B] leading-relaxed">
                <strong className="text-[#2C1810]">Holiday hours may vary.</strong> Follow{' '}
                <a href="https://instagram.com/nailsbydiksha" className="text-[#8B6552] hover:underline">
                  @nailsbydiksha
                </a>{' '}
                on Instagram for the latest updates on special closures and availability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

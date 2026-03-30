'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Label column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4"
          >
            <div className="w-8 h-px bg-[#8B6552] lg:w-px lg:h-16 flex-shrink-0" />
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] lg:[writing-mode:vertical-rl] lg:rotate-180">
              About the Artist
            </p>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-[#2C1810] mb-8"
            >
              Nails as a form of
              <br />
              <span className="italic text-[#8B6552]">self-expression.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <p className="font-sans text-base text-[#6B4C3B] leading-[1.9] font-light">
                  Hi, I&apos;m Diksha — a passionate nail artist with over 4 years of experience
                  creating stunning, personalized nail designs. My studio is a calm, curated space
                  where every appointment is a one-on-one creative session.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="font-sans text-base text-[#6B4C3B] leading-[1.9] font-light">
                  I believe your nails are a canvas. Whether you love clean, minimal designs or
                  bold, intricate nail art — I work with you to bring your vision to life using
                  only premium, skin-safe products.
                </p>
              </motion.div>
            </div>

            {/* Qualities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {[
                'Premium Products',
                'Hygienic Studio',
                'Custom Designs',
                'Certified Artist',
                'Cruelty-Free',
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs tracking-widest uppercase px-4 py-2 border border-[#E0D5C8] rounded-full text-[#6B4C3B] bg-[#F9F3EC] hover:border-[#8B6552] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

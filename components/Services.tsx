'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = [
  {
    id: 'manicure',
    label: 'Manicure',
    num: '01',
    services: [
      { name: 'Basic Manicure', desc: 'Shape, buff, cuticle care + polish', price: '₹600' },
      { name: 'Gel Manicure', desc: 'Long-lasting gel polish, up to 3 weeks', price: '₹900' },
      { name: 'French Manicure', desc: 'Classic white tip with sheer base', price: '₹800' },
      { name: 'Spa Manicure', desc: 'Deep hydration + massage + polish', price: '₹1,100' },
    ],
  },
  {
    id: 'extensions',
    label: 'Extensions',
    num: '02',
    services: [
      { name: 'Gel Extensions', desc: 'Natural-looking gel builder extensions', price: '₹1,800' },
      { name: 'Acrylic Extensions', desc: 'Durable acrylic overlay & sculpt', price: '₹1,600' },
      { name: 'Soft Gel Tips', desc: 'Pre-formed tips with gel overlay', price: '₹2,000' },
      { name: 'Infill / Refill', desc: 'Maintenance for existing extensions', price: '₹1,200' },
    ],
  },
  {
    id: 'nail-art',
    label: 'Nail Art',
    num: '03',
    services: [
      { name: 'Minimalist Art', desc: 'Lines, dots, abstract patterns', price: '₹200/nail' },
      { name: 'Floral Art', desc: 'Hand-painted botanical designs', price: '₹300/nail' },
      { name: 'Ombre / Gradient', desc: 'Seamless colour blending', price: '₹500' },
      { name: 'Full Set Custom Art', desc: 'Bespoke design on all nails', price: '₹1,500+' },
    ],
  },
  {
    id: 'pedicure',
    label: 'Pedicure',
    num: '04',
    services: [
      { name: 'Basic Pedicure', desc: 'Soak, scrub, trim, polish', price: '₹700' },
      { name: 'Gel Pedicure', desc: 'Gel polish with extended wear', price: '₹1,000' },
      { name: 'Spa Pedicure', desc: 'Luxury scrub, mask + massage', price: '₹1,400' },
      { name: "Men's Pedicure", desc: 'Grooming focused, no polish', price: '₹800' },
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('manicure')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const active = categories.find((c) => c.id === activeTab)!

  return (
    <section id="services" ref={ref} className="py-36 lg:py-44 bg-[#EDE3D5]/35">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#D4B896]/60"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            Services & Pricing
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/40">
            §02
          </p>
        </motion.div>

        {/* Heading + tabs row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-[#2C1810] tracking-[-0.03em] leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            The full menu
          </motion.h2>

          {/* Tabs — editorial underline style, not pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-1"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative font-sans text-[11px] tracking-[0.16em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'text-[#2C1810]'
                    : 'text-[#8B6552]/50 hover:text-[#6B4C3B]'
                }`}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#2C1810]"
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Service rows — editorial list, not card grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {active.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-8 py-7 border-b border-[#D4B896]/40 hover:border-[#8B6552]/60 transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <span className="font-serif text-[13px] text-[#CEC0AF] w-7 text-right tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Name + desc */}
              <div className="min-w-0">
                <p className="font-serif text-[clamp(1.05rem,2vw,1.25rem)] font-light text-[#2C1810] tracking-[-0.01em] leading-tight">
                  {service.name}
                </p>
                <p className="font-sans text-[13px] text-[#8B6552]/70 font-light mt-1 leading-snug">
                  {service.desc}
                </p>
              </div>

              {/* Price + book */}
              <div className="text-right flex flex-col items-end gap-1.5">
                <span className="font-serif text-[clamp(1.1rem,2vw,1.35rem)] text-[#2C1810] tracking-[-0.02em]">
                  {service.price}
                </span>
                <button
                  onClick={() => {
                    const el = document.querySelector('#booking')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#8B6552]/0 group-hover:text-[#8B6552] transition-all duration-300"
                >
                  Book →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="font-sans text-[11px] text-[#8B6552]/50 mt-10 tracking-wide"
        >
          * Prices inclusive. Custom work quoted separately.
        </motion.p>

      </div>
    </section>
  )
}

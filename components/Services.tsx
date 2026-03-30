'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = [
  {
    id: 'manicure',
    label: 'Manicure',
    icon: '✦',
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
    icon: '◆',
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
    icon: '✿',
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
    icon: '❧',
    services: [
      { name: 'Basic Pedicure', desc: 'Soak, scrub, trim, polish', price: '₹700' },
      { name: 'Gel Pedicure', desc: 'Gel polish with extended wear', price: '₹1,000' },
      { name: 'Spa Pedicure', desc: 'Luxury scrub, mask + massage', price: '₹1,400' },
      { name: 'Men\'s Pedicure', desc: 'Grooming focused, no polish', price: '₹800' },
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('manicure')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const active = categories.find((c) => c.id === activeTab)!

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-[#EDE3D5]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            Services & Pricing
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#2C1810]">
            The full menu
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-sans text-sm tracking-[0.1em] uppercase px-6 py-2.5 rounded-full border transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-[#2C1810] text-[#F5EFE6] border-[#2C1810]'
                  : 'border-[#CEC0AF] text-[#6B4C3B] hover:border-[#8B6552] hover:text-[#2C1810]'
              }`}
            >
              <span className="mr-2 opacity-70">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Service Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {active.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#F9F3EC] border border-[#E0D5C8] rounded-2xl p-6 hover:border-[#8B6552] hover:shadow-sm transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-sans text-2xl text-[#CEC0AF] group-hover:text-[#8B6552] transition-colors duration-300">
                  {active.icon}
                </span>
                <span className="font-serif text-lg font-medium text-[#8B6552]">{service.price}</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-[#2C1810] mb-2 leading-tight">
                {service.name}
              </h3>
              <p className="font-sans text-sm text-[#8B6552] leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-[#E0D5C8]">
                <button
                  onClick={() => {
                    const el = document.querySelector('#booking')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-sans text-xs tracking-[0.15em] uppercase text-[#6B4C3B] hover:text-[#2C1810] transition-colors duration-200 group-hover:underline underline-offset-4"
                >
                  Book this →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center font-sans text-xs text-[#8B6552] mt-8 tracking-wide"
        >
          * All prices are inclusive. Customisation may vary. Contact for a personalised quote.
        </motion.p>
      </div>
    </section>
  )
}

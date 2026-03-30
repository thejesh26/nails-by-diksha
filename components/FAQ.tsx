'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    q: 'How do I prepare for my nail appointment?',
    a: 'Remove any existing nail polish or gel before your appointment. Arrive with clean, dry nails. If you have gel or acrylic extensions, let me know at the time of booking so I can allocate removal time.',
  },
  {
    q: 'How long do gel nails last?',
    a: 'Gel polish typically lasts 2–3 weeks with proper care. Gel extensions can last 3–4 weeks before needing an infill. Longevity depends on how you use your hands and your nail care routine.',
  },
  {
    q: 'Do you use non-toxic or vegan products?',
    a: 'Yes! I use cruelty-free, non-toxic, and where possible vegan nail products. All polishes used are 5-free (no formaldehyde, toluene, DBP, formaldehyde resin, or camphor). I\'m happy to share brand details on request.',
  },
  {
    q: 'Can I bring nail art references?',
    a: 'Absolutely — I encourage it! Save images you love to Pinterest or Instagram and bring your phone. This helps me understand your style and match your vision as closely as possible.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'I recommend booking 2–3 days in advance for weekdays and 5–7 days ahead for weekend slots, which fill up fast. For special events (weddings, parties), book 2+ weeks ahead.',
  },
  {
    q: 'What if I have sensitive skin or nail conditions?',
    a: 'Please mention any skin conditions, allergies, eczema, psoriasis, or nail damage at the time of booking. I\'ll advise on the best approach and products to ensure a safe, comfortable experience.',
  },
  {
    q: 'Do you offer home visits?',
    a: 'Currently, all appointments are at my studio. Home visits may be available for bridal bookings or special groups — please reach out via Instagram or WhatsApp to discuss.',
  },
  {
    q: 'What is the advance payment policy?',
    a: '30% of the service cost is taken as an advance to confirm your slot. This is refunded in full for cancellations made at least 24 hours before the appointment.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            Got Questions?
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#2C1810]">
            Frequently Asked
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border border-[#E0D5C8] rounded-xl overflow-hidden bg-[#F9F3EC]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-sans text-sm font-medium text-[#2C1810] group-hover:text-[#8B6552] transition-colors duration-200 pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[#CEC0AF] flex items-center justify-center text-[#8B6552] group-hover:border-[#8B6552] transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-[#6B4C3B] leading-relaxed font-light px-6 pb-5 border-t border-[#E0D5C8] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

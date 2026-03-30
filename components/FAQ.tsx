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
    a: "Yes — I use cruelty-free, non-toxic, and where possible vegan nail products. All polishes are 5-free (no formaldehyde, toluene, DBP, formaldehyde resin, or camphor). Happy to share brand details on request.",
  },
  {
    q: 'Can I bring nail art references?',
    a: 'Absolutely — I encourage it. Save images to Pinterest or Instagram and bring your phone. This helps me understand your style and match your vision as closely as possible.',
  },
  {
    q: 'How far in advance should I book?',
    a: '2–3 days ahead for weekdays. Weekend slots fill fast — aim for 5–7 days. For weddings or events, 2+ weeks is ideal.',
  },
  {
    q: 'What if I have sensitive skin or nail conditions?',
    a: "Please mention any skin conditions, allergies, eczema, psoriasis, or nail damage when booking. I'll advise on the best approach and ensure you're comfortable throughout.",
  },
  {
    q: 'Do you offer home visits?',
    a: 'All appointments are currently at my studio. Home visits may be possible for bridal bookings or groups — reach out via Instagram or WhatsApp to discuss.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} className="py-36 lg:py-44 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#E0D5C8]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            Questions
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/40">
            §06
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24">
          {/* Heading — stays fixed left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-serif font-light text-[#2C1810] tracking-[-0.03em] leading-[0.95] sticky top-32"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
            >
              Frequently
              <br />
              <span className="italic text-[#8B6552]">asked.</span>
            </h2>
          </motion.div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-b border-[#E0D5C8]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                >
                  <span className="font-sans text-[14px] text-[#2C1810] font-light leading-snug group-hover:text-[#8B6552] transition-colors duration-200 flex-1">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[#8B6552] text-lg leading-none mt-0.5"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[14px] text-[#6B4C3B] leading-[1.85] font-light pb-6 max-w-[55ch]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

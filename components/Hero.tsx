'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#F5EFE6] pb-0">
      {/* Tonal right panel */}
      <div className="absolute top-0 right-0 w-[42%] h-full bg-[#EDE3D5]/50 hidden lg:block" />

      {/* Fine vertical rule */}
      <div className="absolute top-[20%] left-[calc(50%-1px)] w-px h-[12vh] bg-[#D4B896] hidden lg:block" />

      <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-14 pt-36 pb-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-end">

          {/* Left: Typography */}
          <div className="pb-16 lg:pb-24">
            {/* Issue / volume label — editorial device */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8B6552]/60 mb-14"
            >
              Est. Mumbai — Nail Studio
            </motion.p>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif font-light text-[#2C1810] leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(4.5rem, 11vw, 9.5rem)' }}
              >
                Nails
                <br />
                <em className="not-italic text-[#8B6552]">By&nbsp;</em>
                <span className="italic">Diksha</span>
              </h1>
            </motion.div>

            {/* Rule + tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-5 mt-8 mb-10"
            >
              <div className="w-8 h-px bg-[#8B6552]" />
              <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#6B4C3B]/80">
                Bespoke nail artistry, by appointment
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="font-sans text-[15px] text-[#6B4C3B] leading-[1.85] max-w-[38ch] font-light mb-14"
            >
              A calm, curated studio where every appointment is a one-on-one
              creative session. Premium products. Personalised designs.
              No walk-ins — only intentions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center gap-8"
            >
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-4 font-sans text-[12px] tracking-[0.2em] uppercase text-[#2C1810]"
              >
                <span className="w-10 h-10 rounded-full border border-[#2C1810] flex items-center justify-center group-hover:bg-[#2C1810] transition-colors duration-400">
                  <motion.span
                    className="text-[#2C1810] group-hover:text-[#F5EFE6] transition-colors duration-400"
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                  >
                    →
                  </motion.span>
                </span>
                Book Appointment
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector('#services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#8B6552] underline underline-offset-[5px] decoration-[#CEC0AF] hover:decoration-[#8B6552] transition-all duration-300"
              >
                View Services
              </button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block self-end"
          >
            <div className="relative w-[300px] xl:w-[340px] h-[440px] xl:h-[500px] bg-gradient-to-b from-[#D4B896] to-[#8B6552] overflow-hidden"
              style={{ borderRadius: '50% 50% 0 0 / 30% 30% 0 0' }}
            >
              {/* Placeholder — swap for: <Image src="/profile.jpg" alt="Diksha" fill className="object-cover object-top" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3 text-[#F5EFE6]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-sans text-[10px] text-[#F5EFE6]/50 tracking-wider">profile.jpg</p>
                </div>
              </div>
              {/* Name overlay at base */}
              <div className="absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-[#2C1810]/50 to-transparent">
                <p className="font-serif text-[22px] italic font-light text-[#F5EFE6] tracking-wide leading-tight">
                  Diksha
                </p>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#F5EFE6]/60 mt-1">
                  Nail Artist & Studio Owner
                </p>
              </div>
            </div>

            {/* Horizontal page rule beneath image */}
            <div className="absolute -bottom-px left-0 right-0 h-px bg-[#CEC0AF]" />
          </motion.div>
        </div>

        {/* Bottom rule across full width */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-[#E0D5C8] origin-left"
        />
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-3 hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#8B6552] to-transparent"
        />
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#CEC0AF] [writing-mode:vertical-rl] rotate-180">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5EFE6]">
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-[#EDE3D5] opacity-40" />
        <div className="absolute bottom-12 left-12 w-32 h-px bg-[#CEC0AF]" />
        <div className="absolute top-32 right-24 w-px h-40 bg-[#CEC0AF]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-6">
                Premium Nail Studio
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-[#2C1810] mb-8"
            >
              Nails
              <br />
              <span className="italic font-light text-[#8B6552]">By Diksha</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-10 h-px bg-[#8B6552]" />
              <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#6B4C3B]">
                Where artistry meets elegance
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-sans text-base text-[#6B4C3B] leading-relaxed max-w-md mb-12 font-light"
            >
              Bespoke nail experiences crafted with precision. From classic manicures
              to intricate nail art — every detail, perfected.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToBooking}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#2C1810] text-[#F5EFE6] rounded-full font-sans text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#4A3228]"
              >
                <span className="relative z-10">Book Appointment</span>
                <motion.span
                  className="relative z-10 text-[#8B6552] group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector('#services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#CEC0AF] text-[#6B4C3B] rounded-full font-sans text-sm tracking-[0.15em] uppercase hover:border-[#8B6552] hover:text-[#2C1810] transition-all duration-300"
              >
                View Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-10 mt-14 pt-10 border-t border-[#E0D5C8]"
            >
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '4+', label: 'Years Experience' },
                { number: '50+', label: 'Nail Designs' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-medium text-[#2C1810]">{stat.number}</p>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#8B6552] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 border border-[#CEC0AF] rounded-2xl" />

              {/* Image container */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-[360px] lg:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#EDE3D5] to-[#D4B896]">
                {/* Placeholder — replace with: <Image src="/profile.jpg" alt="Diksha" fill className="object-cover" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 bg-gradient-to-t from-[#2C1810]/30 to-transparent">
                  <p className="font-serif text-lg italic text-[#F5EFE6] tracking-wide">Diksha</p>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#F5EFE6]/80 mt-1">Nail Artist</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#8B6552]/60">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-sans text-xs text-[#8B6552]/60">Add profile.jpg to /public</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#F5EFE6] border border-[#E0D5C8] rounded-xl px-4 py-3 shadow-sm">
                <p className="font-sans text-xs tracking-widest uppercase text-[#8B6552]">Available</p>
                <p className="font-serif text-sm text-[#2C1810] mt-0.5">Book Today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#8B6552] to-transparent"
        />
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#CEC0AF]">Scroll</p>
      </motion.div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F5EFE6]/96 backdrop-blur-md border-b border-[#E8E0D6]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 lg:px-14 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-[17px] font-light tracking-[0.12em] text-[#2C1810] hover:text-[#8B6552] transition-colors duration-400"
          >
            Nails By Diksha
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#6B4C3B]/70 hover:text-[#2C1810] transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Book CTA — text only, underline style */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('#booking')}
              className="font-sans text-[11px] tracking-[0.18em] uppercase text-[#2C1810] underline underline-offset-[5px] decoration-[#CEC0AF] hover:decoration-[#2C1810] transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-[7px]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="h-px bg-[#2C1810] block w-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
              className="h-px bg-[#2C1810] block w-3/4"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
              className="h-px bg-[#2C1810] block w-1/2 origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5EFE6] flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="px-8 h-[72px] flex items-center justify-between border-b border-[#E8E0D6]">
              <span className="font-serif text-[17px] font-light tracking-[0.12em] text-[#2C1810]">
                Nails By Diksha
              </span>
              <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#2C1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNav(link.href)}
                  className="text-left font-serif text-[clamp(2.2rem,7vw,3.5rem)] font-light leading-[1.1] text-[#2C1810] hover:text-[#8B6552] transition-colors duration-200 py-2 border-b border-[#E8E0D6] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="px-10 pb-12">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNav('#booking')}
                className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B6552]"
              >
                Book an Appointment →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

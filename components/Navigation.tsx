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
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5EFE6]/95 backdrop-blur-sm border-b border-[#E0D5C8] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl font-light tracking-widest text-[#2C1810] hover:text-[#8B6552] transition-colors duration-300"
          >
            Nails By Diksha
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-xs tracking-[0.15em] uppercase text-[#6B4C3B] hover:text-[#2C1810] transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#booking')}
                className="font-sans text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#F5EFE6] transition-all duration-300 rounded-full"
              >
                Book Now
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#2C1810] block origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-[#2C1810] block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#2C1810] block origin-center transition-all"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F5EFE6] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className="font-serif text-3xl font-light text-[#2C1810] hover:text-[#8B6552] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => handleNav('#booking')}
              className="mt-4 font-sans text-sm tracking-[0.15em] uppercase px-8 py-3 border border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#F5EFE6] transition-all duration-300 rounded-full"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

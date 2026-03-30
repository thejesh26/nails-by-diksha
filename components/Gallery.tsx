'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

// Placeholder gallery items — replace src with actual images in /public/gallery/
const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Minimalist nude nails', type: 'image', span: 'row-span-1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=80', alt: 'French tip gel nails', type: 'image', span: 'row-span-2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1604654894678-770d5a7dc2b5?w=600&q=80', alt: 'Floral nail art', type: 'image', span: 'row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80', alt: 'Ombre pink nails', type: 'image', span: 'row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1604902396856-4d3aa60e6494?w=600&q=80', alt: 'Nail extensions close-up', type: 'image', span: 'row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1604654894583-41c09adb3f34?w=600&q=80', alt: 'Red gel manicure', type: 'image', span: 'row-span-2' },
  { id: 7, src: 'https://images.unsplash.com/photo-1604902396679-4d3aa60e6494?w=600&q=80', alt: 'Abstract nail design', type: 'image', span: 'row-span-1' },
  { id: 8, src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=80', alt: 'Spa pedicure', type: 'image', span: 'row-span-1' },
]

// Fallback gradient colors when images fail
const placeholderColors = [
  'from-[#D4B896] to-[#8B6552]',
  'from-[#EDE3D5] to-[#CEC0AF]',
  'from-[#8B6552] to-[#4A3228]',
  'from-[#CEC0AF] to-[#8B6552]',
  'from-[#D4B896] to-[#EDE3D5]',
  'from-[#4A3228] to-[#8B6552]',
  'from-[#EDE3D5] to-[#D4B896]',
  'from-[#8B6552] to-[#CEC0AF]',
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32 bg-[#EDE3D5]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            My Work
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#2C1810]">
            The Gallery
          </h2>
          <div className="section-divider mt-6" />
          <p className="font-sans text-sm text-[#6B4C3B] mt-6 max-w-sm mx-auto font-light leading-relaxed">
            Each set is uniquely crafted. Browse my recent work below — click any image to view.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setLightbox({ src: item.src, alt: item.alt })}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#E0D5C8] ${
                i === 1 || i === 5 ? 'row-span-2' : ''
              }`}
            >
              {/* Gradient placeholder background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[i]}`} />

              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/40 transition-all duration-400 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-10 h-10 rounded-full bg-[#F5EFE6]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-[#2C1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#2C1810]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-xs text-[#F5EFE6] tracking-wide">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="font-sans text-sm text-[#6B4C3B] mb-4">See more on Instagram</p>
          <a
            href="https://instagram.com/nailsbydiksha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-sans text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-[#CEC0AF] text-[#6B4C3B] rounded-full hover:border-[#8B6552] hover:text-[#2C1810] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @nailsbydiksha
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-[#1A0E08]/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5EFE6]/90 flex items-center justify-center hover:bg-[#F5EFE6] transition-colors"
              >
                <svg className="w-4 h-4 text-[#2C1810]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A0E08]/80 to-transparent">
                <p className="font-sans text-sm text-[#F5EFE6]">{lightbox.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

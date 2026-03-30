'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scroll = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1A0E08] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top: brand + links */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-14 lg:gap-20 mb-16 pb-16 border-b border-[#2C1810]">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-[22px] font-light tracking-[0.08em] text-[#F5EFE6] mb-4">
              Nails By Diksha
            </h3>
            <p className="font-sans text-[13px] text-[#6B4C3B] leading-[1.85] font-light max-w-[32ch]">
              A premium nail studio in Mumbai.
              By appointment only.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#4A3228] mb-6">
              Navigate
            </p>
            <ul className="space-y-3.5">
              {[
                { label: 'About', id: '#about' },
                { label: 'Services', id: '#services' },
                { label: 'Book', id: '#booking' },
                { label: 'Gallery', id: '#gallery' },
                { label: 'Contact', id: '#contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scroll(link.id)}
                    className="font-sans text-[13px] text-[#6B4C3B] hover:text-[#CEC0AF] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#4A3228] mb-6">
              Contact
            </p>
            <div className="space-y-3.5">
              <a
                href="https://instagram.com/nailsbydiksha"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-[13px] text-[#6B4C3B] hover:text-[#CEC0AF] transition-colors duration-200"
              >
                @nailsbydiksha
              </a>
              <a
                href="tel:+919876543210"
                className="block font-sans text-[13px] text-[#6B4C3B] hover:text-[#CEC0AF] transition-colors duration-200"
              >
                +91 98765 43210
              </a>
              <p className="font-sans text-[13px] text-[#4A3228]">
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-[#4A3228] tracking-wide">
            © {currentYear} Nails By Diksha
          </p>
          <p className="font-sans text-[11px] text-[#2C1810] tracking-wide">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

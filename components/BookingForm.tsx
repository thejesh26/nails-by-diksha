'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  'Basic Manicure',
  'Gel Manicure',
  'French Manicure',
  'Spa Manicure',
  'Gel Extensions',
  'Acrylic Extensions',
  'Soft Gel Tips',
  'Nail Art – Minimalist',
  'Nail Art – Floral',
  'Nail Art – Ombre',
  'Nail Art – Full Custom',
  'Basic Pedicure',
  'Gel Pedicure',
  'Spa Pedicure',
]

interface BookingFormProps {
  selectedDate: string | null
  selectedTime: string | null
}

export default function BookingForm({ selectedDate, selectedTime }: BookingFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: selectedDate || '',
    time: selectedTime || '',
    notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Sync props to form
  const dateValue = selectedDate || form.date
  const timeValue = selectedTime || form.time

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim() || !/^\+?[\d\s\-]{10,}$/.test(form.phone))
      errs.phone = 'Valid phone number required'
    if (!form.service) errs.service = 'Please select a service'
    if (!dateValue) errs.date = 'Please select a date'
    if (!timeValue) errs.time = 'Please select a time slot'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = (field: string) =>
    `w-full font-sans text-sm text-[#2C1810] bg-[#F9F3EC] border rounded-xl px-4 py-3.5 placeholder:text-[#CEC0AF] focus:ring-0 transition-colors duration-200 ${
      errors[field]
        ? 'border-red-300 focus:border-red-400'
        : 'border-[#E0D5C8] focus:border-[#8B6552]'
    }`

  return (
    <div className="bg-[#F9F3EC] border border-[#E0D5C8] rounded-2xl p-6 lg:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-[#EDE3D5] border border-[#CEC0AF] flex items-center justify-center mb-6"
            >
              <svg className="w-7 h-7 text-[#8B6552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="font-serif text-2xl text-[#2C1810] mb-3">Appointment Requested!</h3>
            <p className="font-sans text-sm text-[#6B4C3B] leading-relaxed max-w-xs">
              Thank you, <strong>{form.name}</strong>! I&apos;ll confirm your appointment shortly via
              WhatsApp or call at <strong>{form.phone}</strong>.
            </p>
            <div className="mt-6 p-4 bg-[#EDE3D5]/60 rounded-xl text-left w-full max-w-xs">
              <p className="font-sans text-xs text-[#8B6552] tracking-wider uppercase mb-2">
                Summary
              </p>
              <p className="font-sans text-sm text-[#2C1810]">{form.service}</p>
              {dateValue && (
                <p className="font-sans text-sm text-[#6B4C3B] mt-1">
                  {new Date(dateValue + 'T00:00:00').toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              {timeValue && (
                <p className="font-sans text-sm text-[#6B4C3B]">{timeValue}</p>
              )}
            </div>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ name: '', phone: '', service: '', date: '', time: '', notes: '' })
              }}
              className="mt-6 font-sans text-xs tracking-widest uppercase text-[#8B6552] hover:text-[#2C1810] transition-colors underline underline-offset-4"
            >
              Book another appointment
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="font-serif text-xl text-[#2C1810] mb-6">Your Details</h3>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p className="font-sans text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass('phone')}
                />
                {errors.phone && (
                  <p className="font-sans text-xs text-red-400 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                  Service *
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass('service')}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="font-sans text-xs text-red-400 mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date & Time (manual override if not picked above) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={dateValue}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputClass('date')}
                  />
                  {errors.date && (
                    <p className="font-sans text-xs text-red-400 mt-1">{errors.date}</p>
                  )}
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    value={timeValue}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className={inputClass('time')}
                  />
                  {errors.time && (
                    <p className="font-sans text-xs text-red-400 mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-[#8B6552] mb-2">
                  Notes (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any references, preferences or special requests..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className={`${inputClass('notes')} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 flex items-center justify-center gap-3 py-4 bg-[#2C1810] text-[#F5EFE6] rounded-xl font-sans text-sm tracking-[0.15em] uppercase hover:bg-[#4A3228] active:scale-[0.98] transition-all duration-300 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-[#F5EFE6]/30 border-t-[#F5EFE6] rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </button>

              <p className="font-sans text-[11px] text-center text-[#8B6552] tracking-wide">
                I&apos;ll confirm within 2 hours via WhatsApp.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

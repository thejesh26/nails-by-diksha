'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import BookingForm from './BookingForm'

const timeSlots = [
  { time: '09:00', label: '09:00', available: true },
  { time: '10:00', label: '10:00', available: true },
  { time: '11:00', label: '11:00', available: false },
  { time: '12:00', label: '12:00', available: true },
  { time: '14:00', label: '14:00', available: true },
  { time: '15:00', label: '15:00', available: true },
  { time: '16:00', label: '16:00', available: false },
  { time: '17:00', label: '17:00', available: true },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDateOptions() {
  const dates = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    const day = d.getDay()
    if (day !== 0) {
      dates.push({
        date: d.toISOString().split('T')[0],
        display: d.getDate().toString(),
        day: days[day === 0 ? 6 : day - 1],
        month: d.toLocaleString('default', { month: 'short' }),
      })
    }
  }
  return dates.slice(0, 8)
}

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const dateOptions = getDateOptions()

  return (
    <section id="booking" ref={ref} className="py-36 lg:py-44 bg-[#EDE3D5]/35">
      <div className="max-w-7xl mx-auto px-8 lg:px-14">

        {/* Top rule row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20 pb-6 border-b border-[#D4B896]/60"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60">
            Reserve Your Slot
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/40">
            §03
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-light text-[#2C1810] tracking-[-0.03em] leading-[0.95] mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Book an appointment
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Date & Time Picker */}
          <div>
            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60 mb-5">
                Select Date
              </p>
              <div className="grid grid-cols-4 gap-2.5">
                {dateOptions.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center py-4 px-2 border transition-all duration-200 rounded-lg ${
                      selectedDate === d.date
                        ? 'bg-[#2C1810] border-[#2C1810] text-[#F5EFE6]'
                        : 'border-[#D4B896]/50 text-[#6B4C3B] hover:border-[#8B6552] bg-[#F9F3EC]/70'
                    }`}
                  >
                    <span className={`font-sans text-[9px] tracking-[0.2em] uppercase mb-1.5 ${
                      selectedDate === d.date ? 'text-[#CEC0AF]' : 'text-[#8B6552]/60'
                    }`}>
                      {d.day}
                    </span>
                    <span className="font-serif text-[1.35rem] font-light leading-none tracking-[-0.02em]">
                      {d.display}
                    </span>
                    <span className={`font-sans text-[9px] mt-1.5 ${
                      selectedDate === d.date ? 'text-[#CEC0AF]' : 'text-[#8B6552]/60'
                    }`}>
                      {d.month}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10"
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/60 mb-5">
                Available Times
              </p>
              <div className="grid grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    className={`py-3.5 border text-center transition-all duration-200 rounded-lg ${
                      !slot.available
                        ? 'border-[#E8E0D6]/50 text-[#CEC0AF]/50 cursor-not-allowed'
                        : selectedTime === slot.time
                        ? 'bg-[#8B6552] border-[#8B6552] text-[#F5EFE6]'
                        : 'border-[#D4B896]/50 text-[#6B4C3B] hover:border-[#8B6552] bg-[#F9F3EC]/70'
                    }`}
                  >
                    <span className="font-sans text-[13px] tracking-wide">
                      {slot.label}
                    </span>
                    {!slot.available && (
                      <p className="font-sans text-[8px] uppercase tracking-widest text-[#CEC0AF]/50 mt-0.5">
                        Taken
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Summary */}
            {(selectedDate || selectedTime) && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-10 pt-8 border-t border-[#D4B896]/40"
              >
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6552]/50 mb-4">
                  Selected
                </p>
                <div className="flex items-end gap-10">
                  {selectedDate && (
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-[#8B6552]/50 mb-1">Date</p>
                      <p className="font-serif text-[1.3rem] text-[#2C1810] tracking-[-0.02em] leading-tight">
                        {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-IN', {
                          weekday: 'short',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  )}
                  {selectedTime && (
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-[#8B6552]/50 mb-1">Time</p>
                      <p className="font-serif text-[1.3rem] text-[#2C1810] tracking-[-0.02em] leading-tight">
                        {selectedTime}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right — Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

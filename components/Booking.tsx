'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import BookingForm from './BookingForm'

const timeSlots = [
  { time: '09:00', label: '9:00 AM', available: true },
  { time: '10:00', label: '10:00 AM', available: true },
  { time: '11:00', label: '11:00 AM', available: false },
  { time: '12:00', label: '12:00 PM', available: true },
  { time: '14:00', label: '2:00 PM', available: true },
  { time: '15:00', label: '3:00 PM', available: true },
  { time: '16:00', label: '4:00 PM', available: false },
  { time: '17:00', label: '5:00 PM', available: true },
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
    <section id="booking" ref={ref} className="py-24 lg:py-32 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6552] mb-4">
            Reserve Your Slot
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#2C1810]">
            Book an Appointment
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Date & Time Picker */}
          <div>
            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#6B4C3B] mb-5">
                Select Date
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {dateOptions.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex flex-col items-center py-4 px-2 rounded-xl border transition-all duration-200 ${
                      selectedDate === d.date
                        ? 'bg-[#2C1810] border-[#2C1810] text-[#F5EFE6]'
                        : 'border-[#E0D5C8] text-[#6B4C3B] hover:border-[#8B6552] bg-[#F9F3EC]'
                    }`}
                  >
                    <span className={`font-sans text-[10px] tracking-widest uppercase mb-1 ${selectedDate === d.date ? 'text-[#CEC0AF]' : 'text-[#8B6552]'}`}>
                      {d.day}
                    </span>
                    <span className="font-serif text-xl font-medium">{d.display}</span>
                    <span className={`font-sans text-[10px] mt-0.5 ${selectedDate === d.date ? 'text-[#CEC0AF]' : 'text-[#8B6552]'}`}>
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#6B4C3B] mb-5">
                Available Time Slots
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all duration-200 ${
                      !slot.available
                        ? 'border-[#EDE3D5] text-[#CEC0AF] cursor-not-allowed bg-[#F9F3EC]/50'
                        : selectedTime === slot.time
                        ? 'bg-[#8B6552] border-[#8B6552] text-[#F5EFE6]'
                        : 'border-[#E0D5C8] text-[#6B4C3B] hover:border-[#8B6552] bg-[#F9F3EC]'
                    }`}
                  >
                    <span className="font-sans text-sm font-medium">{slot.label}</span>
                    {!slot.available && (
                      <p className="font-sans text-[9px] uppercase tracking-wide text-[#CEC0AF] mt-0.5">
                        Booked
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Selection Summary */}
            {(selectedDate || selectedTime) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-5 bg-[#EDE3D5]/60 border border-[#E0D5C8] rounded-2xl"
              >
                <p className="font-sans text-xs tracking-widest uppercase text-[#8B6552] mb-3">
                  Your Selection
                </p>
                <div className="flex items-center gap-6">
                  {selectedDate && (
                    <div>
                      <p className="font-sans text-xs text-[#8B6552]">Date</p>
                      <p className="font-serif text-base text-[#2C1810] mt-0.5">
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
                      <p className="font-sans text-xs text-[#8B6552]">Time</p>
                      <p className="font-serif text-base text-[#2C1810] mt-0.5">
                        {timeSlots.find((s) => s.time === selectedTime)?.label}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right — Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

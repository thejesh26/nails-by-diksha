import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Booking from '@/components/Booking'
import BookingPolicies from '@/components/BookingPolicies'
import FAQ from '@/components/FAQ'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Booking />
      <BookingPolicies />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

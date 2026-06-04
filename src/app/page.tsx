import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import MetricsBar from '@/components/sections/MetricsBar'
import PlatformStack from '@/components/sections/PlatformStack'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MetricsBar />
      <PlatformStack />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}

import { useState, useEffect } from 'react'
import './index.css'

import Preloader from './components/preloader'
import FomraNavbar from './components/navbar'
import FomraHero from './components/hero'
import FomraAbout from './components/about'
import FomraProjects from './components/projects'
import Testimonials from './components/testimonials'
import FomraInsightsFAQ from './components/faq'
import Footer from './components/footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <>
      <FomraNavbar />
      <main>
        <FomraHero />
        <FomraAbout />
        <FomraProjects />
        <Testimonials />
        <FomraInsightsFAQ />
      </main>
      <Footer />
    </>
  )
}

export default App

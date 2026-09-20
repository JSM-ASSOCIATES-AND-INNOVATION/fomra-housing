import './index.css'

import FomraNavbar from './components/navbar'
import FomraHero from './components/hero'
import FomraAbout from './components/about'
import FomraProjects from './components/projects'
import Testimonials from './components/testimonials'
import FomraInsightsFAQ from './components/faq'
import Footer from './components/footer'

function App() {
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

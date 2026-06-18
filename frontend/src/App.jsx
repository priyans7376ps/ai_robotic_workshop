import Hero from './components/Hero.jsx'
import WorkshopDetails from './components/WorkshopDetails.jsx'
import LearningOutcomes from './components/LearningOutcomes.jsx'
import FAQ from './components/FAQ.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Hero />

        <div id="details">
          <WorkshopDetails />
        </div>

        <div id="outcomes">
          <LearningOutcomes />
        </div>

        <FAQ />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  )
}



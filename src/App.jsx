import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CareerPage from './pages/CareerPage'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Clients />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/career" element={<CareerPage />} />
    </Routes>
  )
}

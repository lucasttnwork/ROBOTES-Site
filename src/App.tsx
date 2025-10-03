import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import GlassmorphismShowcase from './components/GlassmorphismShowcase'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LiquidGlassBackground from './components/LiquidGlassBackground'

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="liquid-glass rounded-3xl p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/70">Carregando experiência 3D...</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Suspense fallback={<LoadingFallback />}>
        <LiquidGlassBackground />
      </Suspense>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <GlassmorphismShowcase />
          <Services />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App


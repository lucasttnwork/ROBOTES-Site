import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Sparkles, ArrowRight, Star } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-6 py-24 overflow-hidden bg-black">
      {/* Full-background 3D scene */}
      <div className="pointer-events-none absolute inset-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-7xl w-full mr-auto ml-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-8 relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/90">
              Pioneira em Robótica no Brasil
            </span>
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block text-gradient glow-text">
              O Futuro
            </span>
            <span className="block text-white/90 mt-2">
              Começa Aqui
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed text-left"
          >
            Trazemos tecnologia de ponta em robótica para o Brasil. 
            Criando sinergia entre humanos e máquinas para um futuro brilhante e conectado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-8"
          >
            <Button
              size="lg"
              variant="glass"
              className="group text-base px-8 py-6 h-auto"
              onClick={() => {
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>Descubra Nossas Soluções</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 h-auto border-white/20 hover:bg-white/10 backdrop-blur-xl"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Fale Conosco
            </Button>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Send } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-gradient">Seja um Pioneiro</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Junte-se às empresas visionárias que estão transformando o futuro com robótica.
              Cadastre-se para receber novidades, insights e oportunidades exclusivas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="seu@email.com"
                className="flex-1"
              />
              <Button variant="glass" size="lg" className="group">
                <span>Quero Saber Mais</span>
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm text-white/50 mt-6"
            >
              Conteúdo exclusivo sobre inovação e tecnologia. 🤖
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


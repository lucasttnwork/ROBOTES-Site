import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Layers, Palette, Zap, Shield, Globe, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Tecnologia de Ponta',
    description: 'Robôs equipados com as mais avançadas tecnologias do mercado global, trazendo inovação para o Brasil.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Confiabilidade Premium',
    description: 'Qualidade excepcional em cada detalhe. Produtos testados e certificados para máxima performance.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Eficiência Revolucionária',
    description: 'Soluções que otimizam processos, aumentam produtividade e transformam operações.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'Integração Inteligente',
    description: 'Robôs que se conectam perfeitamente ao seu ecossistema, criando sinergia operacional.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Visão Global, Atuação Local',
    description: 'Tecnologia mundial adaptada para as necessidades e realidades do mercado brasileiro.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Design Excepcional',
    description: 'Estética minimalista e sofisticada. Robôs bonitos, funcionais e agradáveis de usar.',
    gradient: 'from-pink-500 to-rose-500',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Por Que ROBOTES?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Somos pioneiros em trazer o que há de mais avançado em robótica 
            para empresas e visionários brasileiros
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:scale-105 transition-all duration-300 liquid-glass-hover h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


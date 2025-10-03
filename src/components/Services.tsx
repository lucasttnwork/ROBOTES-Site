import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone, Calendar, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Soluções Corporativas',
    description: 'Implementação completa de robótica para empresas que buscam transformação digital e eficiência operacional. Da análise de necessidades à integração total.',
    features: [
      'Consultoria e análise de processos',
      'Implementação e integração',
      'Treinamento de equipes',
      'Suporte técnico contínuo'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Inovação & Tecnologia',
    description: 'Parceria estratégica para organizações visionárias que desejam liderar a revolução tecnológica. Acesso às mais avançadas soluções robóticas do mercado mundial.',
    features: [
      'Robôs industriais de última geração',
      'Automação inteligente e IoT',
      'Inteligência artificial integrada',
      'Customização para seu negócio'
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 id="services" className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Transformando Empresas</span>
            <br />
            <span className="text-white">através da robótica</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Soluções completas em robótica para impulsionar o futuro do seu negócio
          </p>
        </motion.div>

        {/* Missão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="liquid-glass max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-4">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-white/80 text-center leading-relaxed">
                Democratizar o acesso à tecnologia robótica de classe mundial no Brasil, 
                capacitando empresas e visionários a conquistarem eficiência, inovação e 
                competitividade global através de soluções inteligentes e integradas.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:scale-105 transition-all duration-300 liquid-glass-hover h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-base text-white/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-white/80">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      variant="glass"
                      className="w-full group-hover:bg-white/20 transition-all duration-300"
                      onClick={() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Solicitar Proposta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card id="contact" className="liquid-glass max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-6">Vamos Conversar?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-white/80">
                Entre em contato conosco e descubra como a robótica pode transformar seu negócio
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contato@robotes.com.br"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@robotes.com.br</span>
                </a>

                <a
                  href="tel:+551133334444"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>(11) 3333-4444</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="liquid-glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">ROBOTES - Tecnologia em Robótica</h3>
            <p className="text-white/70 mb-2">São Paulo, SP</p>
            <p className="text-white/60 text-sm">Construindo o futuro, hoje.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

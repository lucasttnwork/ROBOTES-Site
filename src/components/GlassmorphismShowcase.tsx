import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const glassVariants = [
  {
    title: 'Automação Industrial',
    description: 'Robôs para linhas de produção e manufatura',
    className: 'backdrop-blur-md bg-blue-500/10 border border-blue-400/20',
  },
  {
    title: 'Logística Inteligente',
    description: 'Soluções para movimentação e armazenagem',
    className: 'backdrop-blur-xl bg-purple-500/10 border border-purple-400/20',
  },
  {
    title: 'Robótica Colaborativa',
    description: 'Cobots que trabalham lado a lado com humanos',
    className: 'backdrop-blur-2xl bg-cyan-500/10 border border-cyan-400/20',
  },
  {
    title: 'Inspeção & Qualidade',
    description: 'Visão computacional e controle de qualidade',
    className: 'liquid-glass',
  },
  {
    title: 'Agricultura de Precisão',
    description: 'Tecnologia para o agronegócio do futuro',
    className: 'backdrop-blur-xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-400/20',
  },
  {
    title: 'Pesquisa & Desenvolvimento',
    description: 'Plataformas para inovação e educação',
    className: 'backdrop-blur-3xl bg-pink-500/10 border border-pink-400/20 shadow-inner',
  },
]

export default function GlassmorphismShowcase() {
  return (
    <section id="areas" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Áreas de Atuação</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Soluções robóticas personalizadas para diversos setores e aplicações
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glassVariants.map((variant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${variant.className} rounded-3xl p-8 h-48 flex flex-col justify-between hover:scale-105 transition-all duration-300`}>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{variant.title}</h3>
                  <p className="text-sm text-white/70">{variant.description}</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="liquid-glass">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl md:text-3xl">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-lg md:text-xl text-white/80 italic leading-relaxed max-w-3xl mx-auto">
                  "Acreditamos em um futuro onde humanos e robôs trabalham em harmonia, 
                  criando soluções que elevam a capacidade humana e geram impacto positivo 
                  para a sociedade brasileira."
                </p>
                <div className="mt-6 text-white/60">
                  — ROBOTES, São Paulo
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


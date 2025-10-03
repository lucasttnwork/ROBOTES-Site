import { Github, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const footerLinks = {
  Soluções: ['Automação Industrial', 'Logística Inteligente', 'Robótica Colaborativa', 'Agricultura de Precisão'],
  Empresa: ['Sobre Nós', 'Missão e Visão', 'Carreiras', 'Parceiros'],
  Recursos: ['Blog', 'Cases de Sucesso', 'Catálogo', 'FAQ'],
  Legal: ['Privacidade', 'Termos de Uso', 'Política de Cookies', 'Certificações'],
}

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ROBOTES</span>
              </div>
              <p className="text-white/60 max-w-xs">
                Pioneiros em trazer tecnologia robótica de classe mundial 
                para o mercado brasileiro. Construindo o futuro, hoje.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm">
            © 2025 ROBOTES - Tecnologia em Robótica. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> em São Paulo, Brasil
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


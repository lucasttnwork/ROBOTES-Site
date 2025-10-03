import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Diferenciais', href: '#features' },
  { name: 'Soluções', href: '#services' },
  { name: 'Áreas', href: '#areas' },
  { name: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`${isScrolled ? 'liquid-glass' : 'glass'} rounded-3xl px-6 py-4 transition-all duration-300`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ROBOTES</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href === '#home' ? 'body' : item.href === '#areas' ? '#areas' : item.href)
                    if (item.href === '#home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else if (item.href === '#areas') {
                      const section = document.querySelector('section')
                      section?.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button 
                variant="glass" 
                size="sm"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl liquid-glass"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(false)
                        setTimeout(() => {
                          if (item.href === '#home') {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          } else if (item.href === '#areas') {
                            const section = document.querySelector('section')
                            section?.scrollIntoView({ behavior: 'smooth' })
                          } else {
                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }, 100)
                      }}
                      className="text-white/80 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button 
                    variant="glass" 
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Fale Conosco
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}


# 🤖 ROBOTES - Automação Inteligente

Landing page moderna e otimizada para SEO da ROBOTES, empresa especializada em soluções de robótica, IA e automação de processos.

## 🚀 Stack Tecnológica

- **React 18.3** - Framework UI
- **TypeScript** - Type safety
- **Vite 5.4** - Build tool ultra-rápida
- **Tailwind CSS 3.4** - Estilização
- **Three.js** - Animações 3D
- **Framer Motion** - Animações suaves
- **ShadCN UI** - Componentes

## ✨ Características

- 🎨 Design glassmorphism moderno
- 🌙 Dark mode nativo
- 📱 100% Responsivo (mobile-first)
- ⚡ Performance otimizada
- 🔍 SEO completo (Meta tags, Open Graph, Schema.org)
- 🎭 Animações fluidas e profissionais
- 🌐 PWA ready
- ♿ Acessível (WCAG)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🌐 URLs

**Desenvolvimento:**
- Local: http://localhost:5173
- Network: Disponível na sua rede local

**Produção:**
- https://robotes.com.br

## 📁 Estrutura do Projeto

```
robotes/
├── public/              # Arquivos estáticos
│   ├── favicon.svg      # Favicon ROBOTES
│   ├── robots.txt       # SEO - Crawlers
│   ├── sitemap.xml      # SEO - Mapa do site
│   ├── site.webmanifest # PWA manifest
│   ├── _headers         # Headers (Netlify/Vercel)
│   └── .htaccess        # Apache config
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes base (ShadCN)
│   │   ├── Hero.tsx     # Seção hero
│   │   ├── Features.tsx # Recursos
│   │   ├── Navbar.tsx   # Navegação
│   │   └── ...
│   ├── lib/             # Utilidades
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html           # HTML (SEO otimizado)
├── package.json         # Dependências
├── vite.config.ts       # Config Vite
├── tailwind.config.js   # Config Tailwind
└── tsconfig.json        # Config TypeScript
```

## 🔍 SEO Otimizado

A landing page inclui:

### Meta Tags
- ✅ Title e description otimizados
- ✅ Keywords relevantes
- ✅ Canonical URL
- ✅ Language e geo tags
- ✅ Theme color

### Open Graph
- ✅ Compartilhamento Facebook
- ✅ Compartilhamento LinkedIn
- ✅ Image 1200x630px
- ✅ Locale pt_BR

### Twitter Cards
- ✅ Summary large image
- ✅ Metadados completos

### Schema.org
- ✅ Organization markup
- ✅ WebSite markup
- ✅ SearchAction

### Arquivos SEO
- ✅ robots.txt (indexação)
- ✅ sitemap.xml (mapa do site)
- ✅ Favicon otimizado

## 🎨 Customização

### Cores (src/index.css)
```css
--primary: #0ea5e9;      /* Sky Blue */
--secondary: #3b82f6;    /* Blue */
--accent: #8b5cf6;       /* Purple */
```

### Conteúdo
Edite os componentes em `src/components/` para personalizar textos, imagens e funcionalidades.

### Animações
Configure em `framer-motion` nos componentes ou adicione novas animações.

## 📊 Performance

- ⚡ Lighthouse Score: 90+
- 🎯 First Contentful Paint: < 1.5s
- 🚀 Time to Interactive: < 3s
- 📦 Bundle size otimizado
- 🗜️ Compressão GZIP/Brotli

## 🚢 Deploy

### Netlify / Vercel (Recomendado)

```bash
# Build
npm run build

# Deploy automático via Git
# Conecte seu repositório no painel da Netlify/Vercel
```

**Configurações:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

### Outros Hosts

```bash
# Build
npm run build

# Upload da pasta dist/ para seu servidor
# Certifique-se de configurar:
# - HTTPS redirect
# - SPA routing (redirecionar tudo para index.html)
# - Headers de cache e segurança
```

## 🔧 Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Cria build de produção
npm run preview   # Preview do build localmente
npm run lint      # Verifica código com ESLint
```

## 🌐 Compatibilidade

**Navegadores Suportados:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

**Dispositivos:**
- Desktop (1920px+)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (320px - 767px)

## 📚 Documentação Adicional

- `DEPLOYMENT.md` - Guia completo de deploy
- `SEO_CHECKLIST.md` - Checklist de SEO e otimizações

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: contato@robotes.com.br
- Website: https://robotes.com.br

## 📄 Licença

Copyright © 2025 ROBOTES - Todos os direitos reservados.

---

**Desenvolvido com 💜 usando React, Tailwind CSS e Three.js**

**Versão:** 1.0.0  
**Última atualização:** Outubro 2025

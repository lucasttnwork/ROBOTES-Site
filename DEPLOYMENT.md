# 🚀 Guia de Deploy

Este guia mostra como fazer deploy da sua aplicação Liquid Glass em diferentes plataformas.

---

## 📦 Build de Produção

Antes de fazer deploy, crie o build otimizado:

```bash
npm run build
```

Isso cria a pasta `dist/` com:
- ✅ Código JavaScript minificado
- ✅ CSS otimizado e purgado
- ✅ Assets comprimidos
- ✅ Source maps para debug

---

## 🌐 Vercel (Recomendado)

### Deploy Automático via Git

1. **Instale Vercel CLI:**
```bash
npm install -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

### Configuração (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy via GitHub
1. Conecte seu repositório ao Vercel
2. Configure: Framework Preset → Vite
3. Deploy automático a cada push

---

## 🔷 Netlify

### Deploy via CLI

1. **Instale Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build e Deploy:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Configuração (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy via GitHub
1. Conecte repositório ao Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 🔶 Firebase Hosting

1. **Instale Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Inicialize:**
```bash
firebase login
firebase init hosting
```

3. **Configure firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. **Deploy:**
```bash
npm run build
firebase deploy
```

---

## 🟦 GitHub Pages

1. **Instale gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Adicione ao package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seu-usuario.github.io/seu-repo"
}
```

3. **Configure vite.config.ts:**
```ts
export default defineConfig({
  base: '/seu-repo/',
  // ... outras configs
})
```

4. **Deploy:**
```bash
npm run deploy
```

---

## ☁️ AWS S3 + CloudFront

### 1. Upload para S3

```bash
# Instale AWS CLI
aws configure

# Build e upload
npm run build
aws s3 sync dist/ s3://seu-bucket --delete
```

### 2. Configure CloudFront

1. Crie distribuição CloudFront
2. Origin: Seu bucket S3
3. Default Root Object: `index.html`
4. Error Pages: 404 → /index.html (200)

### 3. Invalidate Cache
```bash
aws cloudfront create-invalidation \
  --distribution-id SEU_ID \
  --paths "/*"
```

---

## 🐳 Docker

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

### Build e Run
```bash
# Build
docker build -t liquid-glass-app .

# Run
docker run -p 8080:80 liquid-glass-app
```

---

## 🔧 Otimizações de Produção

### 1. Variáveis de Ambiente

Crie `.env.production`:
```env
VITE_API_URL=https://api.production.com
VITE_ENABLE_3D=true
```

### 2. Compressão de Assets

Adicione ao `vite.config.ts`:
```ts
import { compression } from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
})
```

### 3. Code Splitting

Já configurado no Vite, mas você pode otimizar:
```ts
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom'],
        'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        'ui-vendor': ['framer-motion', 'lucide-react'],
      },
    },
  },
}
```

### 4. Preload Critical Assets

No `index.html`:
```html
<link rel="preload" as="script" href="/assets/main.js">
<link rel="preconnect" href="https://fonts.googleapis.com">
```

---

## 📊 Performance Checklist

Antes do deploy, verifique:

- [ ] Build sem erros: `npm run build`
- [ ] Preview funcional: `npm run preview`
- [ ] Lighthouse Score > 90
- [ ] Three.js carregando via Suspense
- [ ] Images otimizadas (WebP/AVIF)
- [ ] CSS purgado (Tailwind automático)
- [ ] Sem console.log em produção
- [ ] Meta tags SEO configuradas
- [ ] Favicon e manifesto prontos

---

## 🔍 SEO & Meta Tags

Adicione no `index.html`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO -->
  <title>GS Consulting - Liquid Glass Experience</title>
  <meta name="description" content="Design glassmorphism de classe mundial inspirado no iOS 26" />
  <meta name="keywords" content="glassmorphism, react, three.js, design moderno" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="GS Consulting - Liquid Glass" />
  <meta property="og:description" content="Experiência visual revolucionária" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GS Consulting" />
  <meta name="twitter:description" content="Liquid Glass Experience" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
</head>
```

---

## 🌍 CDN & Caching

### Headers Recomendados

**Netlify (_headers):**
```
/*
  Cache-Control: public, max-age=31536000, immutable
  
/index.html
  Cache-Control: public, max-age=0, must-revalidate
```

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🔐 Segurança

### Headers de Segurança

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## 📱 PWA (Opcional)

Transforme em Progressive Web App:

1. **Instale plugin:**
```bash
npm install vite-plugin-pwa -D
```

2. **Configure:**
```ts
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'GS Consulting',
        short_name: 'GS',
        theme_color: '#8b5cf6',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🎯 Monitoramento

### Analytics

**Google Analytics:**
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Vercel Analytics:**
```tsx
// App.tsx
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
  )
}
```

---

## 🐛 Debug em Produção

### Source Maps

Para debug, mantenha source maps:
```ts
// vite.config.ts
build: {
  sourcemap: true, // ou 'hidden' para maps privados
}
```

### Error Tracking

**Sentry:**
```bash
npm install @sentry/react
```

```tsx
// main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN",
  environment: "production",
});
```

---

## ✅ Checklist Final

Antes de ir ao ar:

- [ ] Build de produção testado
- [ ] Preview em diferentes dispositivos
- [ ] Performance > 90 no Lighthouse
- [ ] SEO meta tags configuradas
- [ ] Analytics instalado
- [ ] Error tracking ativo
- [ ] Backup do código
- [ ] Domínio personalizado configurado
- [ ] SSL/HTTPS ativo
- [ ] 404 page customizada

---

## 🎉 Pronto para Deploy!

Escolha sua plataforma favorita e lance seu projeto Liquid Glass para o mundo! 🚀✨

**Boa sorte!** 🍀


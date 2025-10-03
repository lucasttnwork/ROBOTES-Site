# 🚂 Deploy na Railway - Guia Completo

Este guia mostra como fazer deploy do projeto ROBOTES na plataforma Railway.

## 📋 Pré-requisitos

- [x] Conta no Railway (https://railway.app)
- [x] Projeto configurado no GitHub (recomendado)
- [x] Docker configurado no projeto ✅
- [x] Build testado localmente ✅

## 🚀 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Prepare seu Repositório

```bash
# Certifique-se de que todos os arquivos estão commitados
git status
git add .
git commit -m "feat: preparado para deploy na Railway"
git push origin main
```

### Passo 2: Crie Projeto na Railway

1. Acesse https://railway.app
2. Clique em **"New Project"**
3. Selecione **"Deploy from GitHub repo"**
4. Autorize o Railway a acessar seu repositório
5. Selecione o repositório **ROBOTES**

### Passo 3: Configurações do Projeto

O Railway detectará automaticamente o `Dockerfile` e usará Docker para o build.

**Configurações Automáticas:**
- ✅ Builder: Dockerfile
- ✅ Build Command: (automático via Docker)
- ✅ Start Command: (automático via Docker)
- ✅ Port: 80 (exposto no Dockerfile)

### Passo 4: Variáveis de Ambiente (Opcional)

Se necessário, adicione variáveis de ambiente:

1. No painel do Railway, vá em **"Variables"**
2. Adicione variáveis se necessário:
   - `NODE_ENV=production`
   - `VITE_API_URL=https://api.seu-dominio.com`

### Passo 5: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (geralmente 3-5 minutos)
3. Após o deploy, clique em **"Generate Domain"** para obter URL pública

## 🔧 Método 2: Deploy via CLI

### Instale Railway CLI

```bash
# macOS/Linux
brew install railway

# npm
npm i -g @railway/cli

# yarn
yarn global add @railway/cli
```

### Login e Deploy

```bash
# Login
railway login

# Link projeto (ou crie novo)
railway link

# Deploy
railway up
```

## 🐳 Teste Local com Docker

Antes de fazer deploy, teste localmente:

```bash
# Build da imagem
docker build -t robotes-app .

# Executar container
docker run -p 8080:80 robotes-app

# Acesse: http://localhost:8080
```

## 📊 Configurações do Railway

### Arquivo: railway.json ✅

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "numReplicas": 1,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Dockerfile ✅

O projeto já inclui um Dockerfile otimizado:
- **Build Stage:** Node 18 Alpine (build da aplicação)
- **Production Stage:** Nginx Alpine (servir arquivos estáticos)
- **Size:** ~25MB (otimizado)
- **Health Check:** Configurado

### nginx.conf ✅

Configurações incluídas:
- ✅ SPA routing (redirecionamento para index.html)
- ✅ Cache otimizado para assets
- ✅ Gzip compression
- ✅ Security headers
- ✅ Performance tuning

## 🔒 Configurações de Segurança

Headers de segurança já configurados:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## 🌐 Domínio Customizado

### Configurar Domínio na Railway

1. No projeto, vá em **"Settings"**
2. Clique em **"Domains"**
3. Adicione seu domínio personalizado
4. Configure DNS:

```
Type: CNAME
Name: @ (ou www)
Value: [seu-projeto].railway.app
```

### SSL/HTTPS

Railway fornece SSL automático via Let's Encrypt:
- ✅ Certificado automático
- ✅ Renovação automática
- ✅ HTTPS forçado

## 📈 Monitoramento

### Métricas Disponíveis na Railway

- CPU Usage
- Memory Usage
- Network I/O
- Deploy History
- Logs em tempo real

### Acessar Logs

```bash
# Via CLI
railway logs

# Via Dashboard
Projeto > Deployments > Ver Logs
```

## 🔄 CI/CD Automático

Com GitHub conectado, o Railway faz deploy automático a cada push:

```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
# Railway detecta e faz deploy automaticamente
```

### Configurar Branch de Deploy

1. Settings > **"Production Branch"**
2. Selecione a branch (padrão: `main`)

## 💰 Custos

**Plano Hobby (Gratuito):**
- $5 de crédito/mês grátis
- Suficiente para projetos pequenos
- Sem cartão de crédito necessário

**Plano Developer ($5/mês):**
- $5 de crédito + uso adicional
- Domínios customizados
- Mais recursos

**Este projeto (estimativa):**
- ~500MB RAM
- ~0.1 vCPU
- Custo: **~$3-5/mês**

## ✅ Checklist de Deploy

Antes de fazer deploy, certifique-se:

- [x] Build local funciona: `npm run build` ✅
- [x] Linting sem erros: `npm run lint` ✅
- [x] Docker testado localmente ✅
- [x] Arquivos de configuração criados ✅
  - [x] Dockerfile
  - [x] nginx.conf
  - [x] .dockerignore
  - [x] railway.json
- [x] Variáveis de ambiente configuradas
- [x] Meta tags SEO configuradas ✅
- [x] Favicon e manifest prontos ✅
- [x] Código commitado no Git

## 🐛 Troubleshooting

### Build Falha

```bash
# Verifique logs
railway logs

# Teste build local
npm run build

# Teste Docker local
docker build -t test .
```

### Aplicação não Carrega

1. Verifique se a porta 80 está exposta
2. Verifique logs do Nginx
3. Teste health check: `railway logs --filter health`

### Erros de Roteamento SPA

Certifique-se que `nginx.conf` tem:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## 📚 Recursos Adicionais

- [Railway Docs](https://docs.railway.app)
- [Railway CLI](https://docs.railway.app/develop/cli)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## 🎉 Deploy Completo!

Seu projeto está pronto para produção na Railway! 🚀

**URL de Exemplo:**
- https://robotes-production.railway.app

**Próximos Passos:**
1. Configure domínio personalizado
2. Adicione analytics (Google Analytics, Vercel Analytics)
3. Configure monitoramento (Sentry, LogRocket)
4. Otimize performance (CDN, caching)

---

**Desenvolvido por ROBOTES**  
**Data:** Outubro 2025  
**Versão:** 1.0.0


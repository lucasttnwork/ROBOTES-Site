# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências (incluindo devDependencies para o build)
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Production stage - usando nginx para servir arquivos estáticos
FROM nginx:alpine

# Copiar build para nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração customizada do nginx como template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expor porta (será definida pela variável PORT da Railway)
EXPOSE 80

# Health check - usa a variável PORT se disponível
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT:-80}/ || exit 1

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]


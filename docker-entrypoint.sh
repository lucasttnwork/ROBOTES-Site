#!/bin/sh
set -e

# Define PORT como 80 se não estiver definida (fallback para ambiente local)
export PORT=${PORT:-80}

# Executa o entrypoint padrão do nginx
exec /docker-entrypoint.sh "$@"


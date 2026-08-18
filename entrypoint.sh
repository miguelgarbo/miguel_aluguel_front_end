#!/bin/sh
set -e

: "${VITE_API_URL:=http://miguel_aluguel:8080}"

echo "Configurado v.3 VITE_API_URL=${VITE_API_URL}"

find /usr/share/nginx/html -type f -name "*.js" \
  -exec sed -i "s|__VITE_API_URL__|${VITE_API_URL}|g" {} +

exec "$@"
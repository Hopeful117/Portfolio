# === FRONTEND BUILD STAGE ===
FROM node:20-alpine AS frontend-builder

WORKDIR /app
COPY portfolio/package*.json ./portfolio/
RUN cd portfolio && npm install
COPY portfolio ./portfolio
RUN cd portfolio && npm run build

# === NGINX STAGE ===
FROM nginx:alpine

# Copier le build Vite dans Nginx
COPY --from=frontend-builder /app/portfolio/dist /usr/share/nginx/html

# Copier config nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

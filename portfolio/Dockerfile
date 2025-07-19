# === FRONTEND BUILD STAGE ===
FROM node:20-alpine AS frontend-builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# === NGINX STAGE ===
FROM nginx:alpine

COPY --from=frontend-builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

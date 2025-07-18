# Étape 1 : build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : serveur statique avec nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Supprime la config nginx par défaut et copie la tienne si besoin
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

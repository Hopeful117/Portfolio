# Étape 1 : build
FROM node:20-alpine AS build

WORKDIR /app

# Copier package.json et package-lock.json d'abord (pour cache Docker)
COPY package*.json ./

# Installer toutes les dépendances (dev + prod)
RUN npm install

# Copier tout le code source
COPY . .

# Compiler/build l'app si nécessaire (ex: next build)
RUN npm run build

# Étape 2 : image de production
FROM node:20-alpine AS production

WORKDIR /app

# Copier seulement package.json et package-lock.json pour installer dépendances prod uniquement
COPY package*.json ./

RUN npm install --production

# Copier le build et le code nécessaire depuis l'étape build
COPY --from=build /app ./

# Exposer le port (adapter selon ton app)
EXPOSE 3125

# Démarrer en mode production
CMD ["npm", "start"]

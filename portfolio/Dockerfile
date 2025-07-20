# === FRONTEND DEV STAGE ===
FROM node:20-alpine

# Création du dossier de travail
WORKDIR /app

# Copie des fichiers de dépendances et installation
COPY package*.json ./
RUN npm install

# Copie du code source
COPY . .

# Exposition du port de Vite (par défaut 5173, modifiable dans vite.config.ts)
EXPOSE 5173

# Commande de démarrage du serveur de dev
CMD ["npm", "run", "dev", "--", "--host"]

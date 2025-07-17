# Utilise une image Python officielle
FROM python:3.11-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY requirements.txt .

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt



# Copier tout le projet
COPY . .

# Port exposé
EXPOSE 5125

# Commande de lancement
CMD command: gunicorn -c gunicorn.conf.py portfolio-api.wsgi:application



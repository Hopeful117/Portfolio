from .base import *

# ⚠️ Ne jamais laisser DEBUG=True en production
DEBUG = True

# Autorise tout host en dev
ALLOWED_HOSTS = ["*"]

# Utilise la base de données SQLite par défaut
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Désactive la redirection HTTPS pour le dev
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False

# Permet le chargement de ressources statiques sans collectstatic
STATIC_URL = "/static/"





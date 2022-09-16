# Refactors

- Mettre les appels réseau dans des services
- Créer des composant pour le ocde UI réutilisables
- Créer des constantes globales (url de base)
- Réorganiser la structure du projet

directories:
js:

- components: contient des morceaux de code js reutilisable.
- pages : code js spécifique a certains page (non reutilisable)
- utils : focntion utilitaire par exemple getParams(param), constants
- services: appel réseau

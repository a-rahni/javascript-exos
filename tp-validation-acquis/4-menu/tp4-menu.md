#Afficher menu

Le but de ce TP est d'afficher le menu avec la possibilité de filter selon la categorie:

Les 4 catégories sont :

- `all` : Qui affiche tout le menu
- `breakfast` : N'affiche que les données de la catégorie _breakfast_
- `lunch` : Affiche uniquement les données de la categorie _Lunch_
- `shakes` : Affiche uniquementles données de la categorie _Shakes_
- `dinner` : Affiche uniquement les données de la categorie _dinner_

Voici l'url des données du menu: https://json-server-frontend-training-production.up.railway.app/menu

Exemple d'exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658915519/gif%20exercices/tp4-menu.gif)

## Ajout

Ajouter la possibilité de voir les détails d'un article dans une page détails.

1. Stocker tout le tableau dans le `localStorage`
2. Ajouter les urls cliquables sur chaque `carte` avec un paramère `?id=[votre_id]`.
3. En cliquant sur un elément, vous devez ouvrir page page.Où pour récupérer l'id depuis l'url vous devez vous utiliser [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
4. Aller dans le `localStorage` pour récupérer un element par son `id` puis afficher l'information selon le format de votre choix.

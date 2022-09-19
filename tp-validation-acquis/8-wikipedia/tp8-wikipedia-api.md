#Wikipedia API

Le but de ce TP est des faire des recherches en se basant sur l'API de Wikipedia.

Voici les fonctionnalités attendues:

1. Saisir dans le formulaire de rechercher le sujet à rechercher.

2. Puis lancer la recherche en vous basant sur l'API de wikipedia.

Pour l'API de wikipedia, vous allez utiliser l'url suivant : `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=[votre_recherche]`

Par exemple, si dans la barre de recherche vous écrivez `messi`, votre url devra ressemble à ceci ![Alt Text](https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=messi)

3. Une fois les données récuperées, voici les informations dont vous aurez besoin pour l'affichage : `title`,`pageid` et `snippet`.

Dans le résultat de la requête, le serveur vous donne un objet JSON avec 3 attributs : `batchcomplete`,`continue` et `query`.

Dans l'objet `query`, vous avez 2 informations : `searchinfo` et `search`.Les données dont vous aurez besoin pour l'affichage se trouvent dans `search`.

En ce qui concerne l'affichage, vous devez faire en sorte que les résultats affichés puissent être des liens cliquables qui mènent vers wikipedia.

L'url qui permet d'ouvrir le lien vers Wikipedia est : `http://en.wikipedia.org/?curid=[pageid]`

Exemple : ![Alt Text](https://en.wikipedia.org/?curid=2150841)

Voici un exemple d'execution.

Exemple : ![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658923266/gif%20exercices/tp8-wikipedia-api.gif)

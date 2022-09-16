// bonne pratique: utiliser des nom de variable commencant par $ pour les element de DOM

// methode fetch (pas de Jquery)
// recupere les données (users) et les injecter dans la table html


const $users = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    for (let user of users) {
      const $userRow = document.createElement("tr");

      const $idColumn = document.createElement("td");
      $idColumn.innerText = user.id;

      const $nameColumn = document.createElement("td");
      $nameColumn.innerText = user.name;

      const $emailColumn = document.createElement("td");
      $emailColumn.innerText = user.email;

      const $phoneColumn = document.createElement("td");
      $phoneColumn.innerText = user.phone;

      const $websiteColumn = document.createElement("td");
      $websiteColumn.innerText = user.website;

      const $linkDetails = document.createElement("td");
      $linkDetails.innerHTML = `
      <a href="users-details.html?id=${user.id}">Voir</a>
      `
      

      $userRow.append(
        $idColumn,
        $nameColumn,
        $emailColumn,
        $phoneColumn,
        $websiteColumn,
        $linkDetails
      );
      $users.appendChild($userRow);
    }
  })
  .catch((err) => {
    console.error(err.message);
  });


//   # Ajouter page appelé : users-details.html
//   # Ajouter dans l'en-tête du tableau une colonne Actions
//   # Pour chaque user ajouter dans la colonne un lien avec
//      le text `voir` et redirige vers la page `users-details.html`
//      en passant l'id comme paramètre de l'url(ex : ?id=1)
//   # Dans la page 2, faire des recherches sur l'utilisation
//  URLSearchParam pour pouvoir récupérer l'ID afin de l'utiliser
//  Pour faire un appel HTTP et récupérer un user par son id
//   #Puis afficher le résultat dans une UI de votre choix

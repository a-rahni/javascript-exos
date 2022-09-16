

// la methde Fetch repose sur ce principe

// "/users":  url correspond a /users: l'url retournes liste
// "/users/1": retourne un objet
// timer juste pour simuler (executer aprsè 4s par exemple)
const request = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const pages = {
          "/users": [
            { id: 1, noms: "Christian Lisangola" },
            { id: 2, noms: "OC Zozor" },
          ],
          "/users/1": { id: 1, noms: "Christian Lisangola" },
          "/users/2": { id: 2, noms: "OC Zozor" },
        };
        // url : /users => pages["/users"]
        if (pages[url]) {
          resolve({
            status: 200,
            data: pages[url],
          });
        } else {
          reject({
            status: 404,
            message: "not found",
          });
        }
      }, 4000);
    });
  };

  request("/users/1")  // il y aura une reponse ok avec l'objet 1
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

  request("/contact") // reponse not found car /contacts n'existe pas dans la reponse
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
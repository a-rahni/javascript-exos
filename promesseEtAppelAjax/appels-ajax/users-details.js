//  deux manière pour construire url avec variable `http://url/api/${id}`“http://url/api/”+id

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

console.log("id= ",id)


const $user = document.getElementById("user");

//fetch("https://jsonplaceholder.typicode.com/users?id="+id)  // ca rend une liste avec un seule objet
fetch("https://jsonplaceholder.typicode.com/users/"+id)      // ca rend un seule objet
  .then((response) => {
    return response.json();
  })
  .then((user) => {
   
     console.log("user id details",user);

      const $idE = document.createElement("p");
      $idE.innerText = "id: "+ user.id;

      const $nameE = document.createElement("p");
      $nameE.innerText = "name: "+ user.name;

      const $emailE = document.createElement("p");
      $emailE.innerText = "email: "+ user.email;

      const $phoneE = document.createElement("p");
      $phoneE.innerText = "phone: "+ user.phone;

      const $websiteE = document.createElement("p");
      $websiteE.innerText = "website: "+ user.website;

      $user.append(
        $idE,
        $nameE,
        $emailE,
        $phoneE,
        $websiteE
      );
      
    
  })
  .catch((err) => {
    console.error(err.message);
  });
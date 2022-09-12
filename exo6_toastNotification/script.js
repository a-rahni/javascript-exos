console.log("connecté");

const btn = document.querySelector(".btn");

//cibler et stocker container-notifications
const parentNotification = document.querySelector(".container-notifications");

btn.addEventListener("click", function(){
    // create div
    const notif = document.createElement("div");
    // style
    notif.classList.add("toast");
    // contenu 
    notif.innerText="votre fichier est bien enregistré";

    // append
    parentNotification.appendChild(notif);
    
    // remove timeout
    setTimeout(function(){notif.remove();}, 3000);
    
});
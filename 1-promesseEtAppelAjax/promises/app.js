// promesse : venir te rendre visite le "lundi" à 19h00'
// -> pending : etat de la promesse est en attente (le jours de visiste n'est pas encore arrivé)
// -> Tenue (resolue) : le jour, on rend visite
// -> Echec :  promesse non tenu

// l'ordre de paramètres est très important (peutt chosir des noms differents)
// 1er param: correspond a la fonction a executer si le promesse est tenu
// 2eme param: correspond a la fonction a executer si le promesse n'est pas tenu
// param tenu: resolve: 
// param echec: reject:  
// tenue : resolve
// echec : reject
const rendreVisiteAMonAmi = new Promise((tenue, echec) => {
    const heure = 16;
    if (heure > 19) {
      echec("Desole, je ne saurais pas venir");
    } else {
      tenue("J'arrive, je suis déjà en route");
    }
  });
  
  //1
  console.log("1.Bonjour");
  
  //2
  let resultat = "";
  rendreVisiteAMonAmi
    .then((valeur) => {
      console.log(valeur);
      resultat = valeur;
      console.log("Resultat : ", resultat); //A faire
    })
    .catch((erreur) => {
      console.error(erreur);
    });
  console.log("Resultat : ", resultat); //A ne pas faire  : la promesse est asynch, ce code sera executé avant de repondre a la promesse
  //3
  console.log("2.Bonsoir");
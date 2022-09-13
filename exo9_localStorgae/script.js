console.log('connecté'); 

/*
* faire disparaitre la bannière cookies suite au click sur bouton accepter
Sélectionner et stocker le bouton
Sélectionner et stocker la bannière

Ajouter AddEventListner sur le bouton

*/
const banniere = document.querySelector(".cookies");
const buttonSucess = document.querySelector(".btn-success"); // return le premier element avec le style class btn-success

console.log(banniere);
console.log(buttonSucess);

const stockage = localStorage.getItem('banniere');
// créer une fonction
function check() {
    if (stockage) {
      console.log('stockage existe');
      // faire disparaitre la banniere
      banniere.remove();
    }
  }
  
  check();



/*  1 ere manière de faire
// créer une fonction: vérifier la réponse du localStorage
// en fonction , cacher la banniere
function checkBanniere(){
    const banniereResp = localStorage.getItem('banniere');
    // vu qu'une seule valeur possible on peut checke !=null
    if(banniereResp === 'oui'){
        banniere.style.display="none";
    }

}
// déclencher la fonction
checkBanniere(); // si il y a dans localStroage l'info que banniere cookies a été accepté
                // n'affiche pas la banniere (display:none)
*/

buttonSucess.addEventListener("click",function(){
    console.log('btn cliqué')
    //faire disparaitre la banniere
    banniere.style.display="none";

    // enregistrer le localStorage
    localStorage.setItem('banniere','oui');  // user a clické sur ok
    //window.localStorage.setItem('banniere','oui');


});

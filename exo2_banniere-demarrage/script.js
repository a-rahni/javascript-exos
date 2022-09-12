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

buttonSucess.addEventListener("click",function(){
    console.log('btn cliqué')
    //faire disparaitre la banniere
    banniere.style.display="none";

});

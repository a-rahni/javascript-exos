console.log('connecté');

//changer la couleur du bouton
// changer le texte du bouton

// changer la classe de l'icône avec fa-smile-wink
// changer la couleur avec .happy

const boutonAbn = document.querySelector(".btn");
const icone = document.querySelector(".fa-meh-blank");


boutonAbn.addEventListener("click", function(){

    if(boutonAbn.textContent.toLowerCase() === "Abonné".toLowerCase()){
        boutonAbn.textContent= "Abonnez-vous";
    }else{
        boutonAbn.textContent= "Abonné";
    }
    
    boutonAbn.classList.toggle("abonne");

    
    icone.classList.toggle("fa-smile-wink");
    icone.classList.toggle("happy");

    // let contenuHTML = boutonAbn.innerHTML;
    // if(contenu ==='Abonnez-vous'){
    //     boutonAbn.innerText ='Abonné'
    // }else{
    //     boutonAbn.innerText ='Abonnez-vous'
    // }

    //icone.classList.toggle("fa-meh-blank"); si je fait toggle sur fa-meh-black, 
    //--> donc sera supprime dans html, pas de problème de section car se fait une fois au demarrage de la page
    //--> pas de lien entre selection et les classes, on peut avoir un id et des classes
    // toggle ajoute/enleve une classe si elle nexistepas/existe

});

// btn.addEventListener('click', function () {
//     // console.log('bouton cliqué');
//     btn.classList.toggle('abonne');
  
//     let contenu = btn.innerText;
//     console.log(contenu);
//     let contenuHTML = btn.innerHTML;
//     console.log(contenuHTML);
  
//     if (contenu === 'Abonnez-vous') {
//       btn.innerText = 'Abonné';
//     } else {
//       console.log('depuis else');
//       btn.innerText = 'Abonnez-vous';
//     }
//   });

// // au clic sur l'icône
// // l'icône change de classe (fa-smile-wink)
// // l'icône change de couleur (happy)

// icone.addEventListener('click', function () {
//     console.log('icone cliquée');
  
//     // Quelle méthode / outil ?
//     // element.classList.toggle('class');
//     icone.classList.toggle('fa-smile-wink');
//     icone.classList.toggle('happy');
//   });
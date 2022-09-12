console.log("connected")

// sélectionner et stcker le btn
const btn = document.getElementById('btn');
const resultat = document.getElementById('resultat');

btn.addEventListener("click", function(){
    //console.log('cliqué');

    // etape 1 = créer un élément
    const notif =document.createElement('div');
    //console.log(notif);

    //etape 2: ajouter une classe carre
    notif.classList.add("carre")
    console.log(notif);

    //etape 3: ajouter notif dans le html (resultat le div dans lequel on va rajoutes l'element créé)
    resultat.appendChild(notif);

    // supprimer l'element du DOM après un timeout
    setTimeout(function(){notif.remove();},3000);  // time en ms

});

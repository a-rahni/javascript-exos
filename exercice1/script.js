// je vérifier que script.js est bien connecté
console.log("connecté");

let nom = "durand"; // chaine de caractères -string
console.log(nom)
nom ="lambert";
console.log(nom);
nom = 3; // number
console.log(nom);

//utilisation de const
const age = 30;

// concaténation
const mot1 = "hello";
const mot2 = "tout le mond";
console.log(mot1 + " "+ mot2);
// string literals  (l'espace entre les variabe pris en compte car tout est chaine de caractères)
console.log(`${mot1} ${mot2}`);

// selectionner et stocker le titre rouge
const titre = document.getElementById("title");
console.log(titre);
// agir sur le titre rouge
titre.style.color="green";
// on pourrait ecrrier de cette manière mais de preference en plusieur etapes pour le debug
// document.getElementById("title").style.color="green";

//sélectionner et stocker le carré rouge + vérifier
const carreRouge = document.getElementById("btn-red");
console.log(carreRouge, "carre rouge");

// agir sur ce carré au click
// au click sur le carre, le carre change de couleur (green)
// element.addEventListner("click", function(){})
carreRouge.addEventListener('click',function(){
    console.log("cliqué")
    carreRouge.style.backgroundColor="green"}
    );

// ajouter un carré vert et le transformer en bleu au click
const carreVert = document.getElementById("btn-green");
carreVert.addEventListener("click", function(){
     carreVert.style.backgroundColor= "blue";
}
);

//condition &&  ||
// == verfier egalite de valeurs, === equalite de valeurs et de type
const message = "Hello";
console.log(message.toUpperCase()); // toLowerCase()
if(message === "Hello"){
    console.log("bonjour");
}else{
    console.log("else");
}

// afficher message dans l'element titre la page
titre.textContent="nouveau titre"; // ne tient pas en compte les espace (en cas de compraison)
titre.innerHTML ="nouveau titre avec innerHTML"; // prend en compte les espaces

//// partie alterner avec un toggle
const btnBlue = document.querySelector(".btn-blue");
console.log(btnBlue);
const btnAlterner = document.getElementById('btn');
console.log(btnAlterner);

btnAlterner.addEventListener("click", function(){
    console.log("btn cliqué");
    btnBlue.classList.toggle('btn-blue_alterne'); // il ne faut pas mettre le . avant le nom de la classe
    // il faut que le style dans html est definir par une classe.
});
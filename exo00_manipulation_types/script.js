
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log("connecté");

// API avec Jquery
// en html ajouter le link  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
// ou <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// exemple api meteo paris
let url =
  'https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric';

function getApi() {
    // avec jquery
  $.get(url).done(function (data) {
    console.log('la temperatur est de ' + data.main.temp);
  });

  // avec fetch
  fetch(url)
    .then((responce) => responce.json())
    .then((responce) => {
      console.log('la temperatur est de ' + responce.main.temp);
    });
}

getApi();


/*
let a = true;
let b = 12;
const c = a + b;
console.log('le resultat est : ' + c);

alert('bien venu sur la page de formulaire ');
// read a partir du clavier
let d = prompt('distance:');
let t = prompt('time:');
let vitesse = d / t;

console.log('vitesse :', vitesse);
*/

/*
class etudiant{
    constructor(nom, prenom, age, genre, pays, option){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.genre= genre;
        this.pays = pays;
        this.option = option;
    }

    setNom(nom){
        this.nom = nom;
    }

    getNom(){
        return this.nom;
    }
}

const e1 = new etudiant('dupond','jean',21, 'masculin','france','svt');
console.log(e1.nom, e1.prenom);

e1.setNom('nomModif');

console.log(e1.nom, e1.prenom);
*/




/* tri un tableau d'objet  */

// fucntion pure: ne pas modifier tab, sort modifier la table
function sortPrice(tab){
 return [...tab].sort((a,b)=> a.prix -b.prix);
 //return tab.map(e=>e).sort((a,b)=> a.prix -b.prix);
 //return tab.map((e) => e).sort((a, b) => a.prix > b.prix);
}
console.log(
    sortPrice([
        {nom: 'citron', prix: 50},
        {nom: 'menthe', prix: 35},
        {nom: 'fraise', prix: 5},
    ])
);


/*
class boisson{
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}
let tab=[new boisson('citron',50), new boisson('menthe', 35), new boisson('fraise',5)];
console.log(tab);

let tabtri = tab.map(e=>e).sort(comparePrix);

function comparePrix(a, b){
    return a.prix > b.prix
}
*/



// renvoyer un tableau où chaque lement du tableau d'origine est rajouter a son index

function tabIndex(tab){
    let newTab=[];
    for(let i=0;i<tab.length;i++){
        newTab.push(i+tab[i]);
    }
    return newTab;
}

let tab=[2,1,0,1];
let tab1 =tabIndex(tab);
console.log(tab);
console.log(tab1);

let newtab1 = tab.map((element, index) => element + index);
console.log(newtab1);



// produit des nombre impair dans un tableau

function prodImp(tab){
    return tab.filter(e=>e%2!==0).reduce((a,b)=> a*b);
}
console.log(prodImpair([1,2,3,4])); // 3

function prodImpair(tab){
    let prod=1;
    tab.forEach(element => {
        
        prod *=(element%2!==0)?element:1; 
    });
}
console.log(prodImpair([1,2,3,4])); // 3
console.log(prodImpair([3,6,8,5,5,7]));//525


// supprimer du tableau les mots commenacant par z
function filterWords(tab) {
    return tab.filter((e) => !e.toLowerCase().startsWith('z'));
  }
  console.log(filterWords(['Bob', 'Alex', 'Zoello']));
  console.log(filterWords(['Lion', 'Zebra', 'Gazelle']));

  // prend un tableau d'element et renvoyer que les entiers
  function getInt(tab){
    return tab.filter(e=> typeof e === 'number');
  }

  console.log(getInt([1,2,"3","4","5",6]));
  console.log(getInt(["vache",20,"cheval",1,"poule",50]));


  // a partir de deux tableaux x ety , revoyer un tableau avec les couple (x,y) dans chaque case
  function convert(tabx, taby) {
    return tabx.map((element, index) => [element, taby[index]]);
    // return tabx.map((element, index) => {
    //   let h = element + taby[index];
    //   return [h, taby[index]];
    // });
  }
  console.log(convert([0, 2, 5], [8, 6, 9]));

// remplacer les voyelles avec un caractère donné // utliser les expressions regulière
var regexpVoyel = /[aeiou]/;
function replaceVoyel(chaine, c) {
    return chaine.replace(/[aeiou]/gi, c);
//   return chaine
//     .split('')
//     .map((e) => {
//       return e.match(regexpVoyel) ? c : e;
//     })
//     .join('');
}
console.log(replaceVoyel('voyelle', '$'));
console.log(replaceVoyel('boulevard', '$'));


// renvoyer les extensions des fichiers d'un tableau
function getExtension(files) {
    return files.map((file) => file.split('.').pop());
  }
  console.log(getExtension(['fichier.html', 'file.js'])); //[html,js]


// recursivité: somme des element d'un tableau
function somme(tab) {
    return tab.length === 0 ? 0 : tab.reduce((a, b) => a + b);
  }
  console.log(somme([1, 2, 3])); // 6
  console.log(somme([1, 2]));    // 3
  console.log(somme([]));       //0

  function getSomme(tab) { 
    return tab.length === 0 ? 0 : tab.pop() + getSomme(tab); // pop renvoi le dernier element et le supprime du tableau
  }
  console.log(getSomme([1, 2, 3]));
  console.log(getSomme([]));



// repeter chaque caractère dans une chaine n fois
function repeatChar(chaine, n) {
    let tab = chaine.split('');
    return tab.map((e) => e.repeat(n)).join('');
  }
  console.log(repeatChar('alex', 3)); // aaallleeexxx
  console.log(repeatChar('waytolearnx', 1)); //waytolearnx



// si deux param sont des chaines : faire l'addition comme chiffre
// si les deux param sont des entier , faire la concaténation comme des chaines
let a = '5'; let b = '6'; // addtion comme entiers
let a1 = 5; let b1 = 6; // concatener comme des string
// if (a instanceof String && b instanceof string)
function add(a, b) {
  if (typeof a !== typeof b) {
    return null;
  }

  if (typeof a === 'string') {
    return Number(a) + Number(b);
  }
  return String(a) + String(b);
}
console.log(add(a, b));
console.log(add(a1, b1));





function isPalindrome(chaine) {
    let result = chaine == chaine.split('').reverse().join('');
    return result;
  }
  
  let chaine = 'selles';
  isPalindrome(chaine)
    ? console.log(chaine, 'is palindrom')
    : console.log(chaine, 'is not palindrom');
  
  chaine = 'sellesxx';
  isPalindrome(chaine)
    ? console.log(chaine, 'is palindrom')
    : console.log(chaine, 'is not palindrom');





/* // conditions
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const email = 'ahmed@gmail.com';
const pwd = 'password';

// read a partir du clavier
let e = prompt('saisir vote email:');
let p = prompt('saisir pswword:');

if (email === e && pwd === p) {
  appDiv.innerHTML += `<p>Bienvenu dans votre espace </p>`;
} else {
  alert('indetifiants incorrectes')
}
*/

/*
let i = 1;
while (i < 10) {
  console.log('i=', i);
  i++;
}
*/

/*
let i = 1;
while (i <= 10) {
  console.log(7 + 'x' + i + '=', i * 7);
  i++;
}
*/

/*let i = 1;
let j = prompt();
while (i <= 10) {
  console.log(j + 'x' + i + '=', i * j);
  i++;
}
*/
/*
function somme(a, b) {
  return a + b;
}
*/
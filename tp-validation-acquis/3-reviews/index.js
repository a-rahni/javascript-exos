import { listPersonnes } from "./data.js";

const $review = document.querySelector("#review");
const $photo = document.querySelector("#photoIdent");
const $name = document.querySelector("#name");
const $job = document.querySelector("#job");
const $presentation = document.querySelector("#presentation");
const $btnLeft =document.querySelector("#precedent");
const $btnright =document.querySelector("#suivant");
//console.log('connected')

let index = 0;

showReview(listPersonnes[0]);

$btnLeft.addEventListener('click', function(){
    showReview(previousElement());
});

$btnright.addEventListener('click', function(){
    showReview(nextElement());
});

function nextElement(){
    //index = (index++) % (listPersonnes.length); // valeur ne change pas 
    index = (index+1)% (listPersonnes.length) ;
    console.log(index);
    return listPersonnes[index];

}
function previousElement(){
    index = (index-1)<0?listPersonnes.length-1:index-1;
    console.log(index);
    return listPersonnes[index];


}



function showReview(personne){
    $photo.setAttribute('src',personne.img);
    $name.innerText=personne.name;
    $job.innerText=personne.job;
    $presentation.innerText=personne.text;
}





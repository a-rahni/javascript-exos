console.log("connecté");

let nbrProduit = 0;

const btnAdd = document.querySelector(".btn-add");
console.log(btnAdd);

const contentPanier = document.querySelector(".content-panier");
console.log(contentPanier);

contentPanier.textContent= `Vous avez ${nbrProduit}  produits dans le panier`  ;

btnAdd.addEventListener("click", function(){
    console.log("add cliqué");
    nbrProduit++;
    //contentPanier.textContent= "Vous avez "+ nbrProduit+ " produit dans le panier"  ;
    contentPanier.textContent= `Vous avez ${nbrProduit}  produits dans le panier`  ;

})

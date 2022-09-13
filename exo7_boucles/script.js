
// sélectionner plusieurs elements qui ont la même classe
const imgs= document.querySelectorAll(".img");
console.log(imgs);
//---> imgs: un tableau d'images

// ajouter un évènement au clic avec console.log

imgs.forEach(img=>{
    img.addEventListener('mouseenter', function(){
        console.log(img,'cliqué');
        // changer .style.filter = 'blur(10px)'
        img.style.filter = 'blur(10px)';
        //img.getElementsByClassName.filter = 'blur(10px)';
    });

    img.addEventListener('mouseleave', function(){
        img.style.filter = 'blur(0px)';
    });

});
   


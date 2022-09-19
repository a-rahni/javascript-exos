
const btnClickme = document.querySelector(".btn");
const containerColor = document.querySelector(".containerColor");
const nameColor = document.querySelector(".nameColor");

const colors =["green", "red", "rgba(133,122,200)", "#f15025"];
const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btnClickme.addEventListener("click",function(){
    
    //v1
    // const color = generateColor_v1(hexa);

    //v2: sans utiliser le tableau
    const color = generateColor_v2();

    containerColor.style.background = color;
    nameColor.textContent = "Background Color" + color;

});

// v1
function generateColor_v1(array){
    let gColor ='#';
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random() * array.length);
        gColor += array[index];
        console.log(index);
    }
    return gColor;
}

function generateColor_v2(){
    let gColor ='#';
    for(let i=0;i<6;i++){
        let nbr = Math.floor(Math.random() * 16); // base 16 0..F
        gColor += nbr.toString(16); // 16 : précise la  base 16 (heax
        console.log(nbr);
    }
    return gColor;
}
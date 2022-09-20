import { data } from "./data.js";

const $btnLeft = document.querySelector("#btn-left");
const $btnRight = document.querySelector("#btn-right");
const $imgContainer = document.querySelector(".img-container");
const $titleImg = document.querySelector(".title-img");
const $listImgMin = document.querySelector(".list-img-miniature");

let indexData = 2;

showImg(data[indexData]);
createListImgMiniature(data, $listImgMin);

$btnLeft.addEventListener('click',function(){
    if(indexData>0){
        indexData--;
    }
    console.log(indexData);
    refreshDispaly();
});

$btnRight.addEventListener('click',function(){
    if(indexData< data.length -1){
        indexData++;
    }
    console.log(indexData);
    refreshDispaly();
});

function refreshDispaly(){
    showImgWithTitle(data[indexData]);
    // ajouter un effet sur l'image dans la liste
}




//------------------------- components--------------------------
function showImgWithTitle(dataElement){
    $imgContainer.setAttribute("src",dataElement.url);
    $titleImg.innerText = dataElement.title;
}
function showImg(dataElement){
    $imgContainer.setAttribute("src",dataElement.url);
}

function createListImgMiniature(dataList, containerComponent){
    for(let i=0;i< dataList.length; i++){
        let $img = createImg(dataList[i]);
        containerComponent.appendChild($img ); 
        $img.addEventListener('click',function(){
            indexData = i;
            refreshDispaly();
        });
    }
    //console.log(containerComponent);
}

function createImg(dataElement){
    const $img = document.createElement("img");
    $img.setAttribute('src',dataElement.url);
    $img.setAttribute('alt',"img not available");
    //console.log($img);
    return $img;

}
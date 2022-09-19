const $counter = document.querySelector("#counter")
const $btnDec = document.querySelector("#btnDec");
const $btnReset = document.querySelector("#btnReset");
const $btnInc = document.querySelector("#btnInc");

let counterValue = 0;

$btnDec.addEventListener("click", function(){
    counterValue -= 1;
    refreshCounterDisplay();
    //ElementTextRefresh($counter,counterValue);
});

$btnReset.addEventListener("click", function(){
    counterValue = 0;
    refreshCounterDisplay();
    //ElementTextRefresh($counter,counterValue);
});

$btnInc.addEventListener("click", function(){
    counterValue += 1;
    refreshCounterDisplay();
    //ElementTextRefresh($counter,counterValue);
});



// function ElementTextRefresh(element, value){
//     element.innerText= value;
// }

function refreshCounterDisplay(){
    $counter.innerText= counterValue;
    //let color = (counterValue===0)?black:(counterValue<0)?red:green;
    let color = (counterValue===0)?'#000000':(counterValue<0)?'#ff0000':'#008000';
    $counter.style.color=color;
}

export function AddClickEventOnDeleteButton(ButtonElement){
    ButtonElement.addEventListener('click',function(){
        ButtonElement.parentElement.remove();

    });
}
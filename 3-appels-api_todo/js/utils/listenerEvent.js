export function addClickListenerToDoWithRedirect(element, url){
    element.addEventListener('click',function(){
        document.location.href=url;
        //window.location.href=url;
     });
}

export function addMouseenterListenerToDo(element){
    element.addEventListener('mouseenter', function(){ 
        element.classList.toggle("todoFormMouseenter");
    });
}
  

export function addMouseleaveListenerToDo(element){
    element.addEventListener('mouseleave', function(){
        element.classList.toggexportle("todoFormMouseenter");
    });
}
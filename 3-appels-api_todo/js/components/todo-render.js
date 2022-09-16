import { addClickListenerToDoWithRedirect, addMouseenterListenerToDo, addMouseleaveListenerToDo } from "../utils/listenerEvent.js";

export function TodoRender(todo) {
  //console.log(todo);
  const $todoForm = document.createElement("div");
  $todoForm.setAttribute("class","todoForm");
  $todoForm.innerText= todo.title;
  //$todoForm.textContent=todo.title;
  if(todo.completed === true){
    $todoForm.setAttribute("class",$todoForm.getAttribute("class") + " line");
  }
  const url = `pages/todo-details.html?id=${todo.id}`
  addClickListenerToDoWithRedirect($todoForm, url);
  addMouseenterListenerToDo($todoForm);
  addMouseleaveListenerToDo($todoForm);

  //console.log($todoForm);
  return $todoForm;
}


/*
export function TodoRender(todo) {
  //console.log(todo);
  const $todoForm = document.createElement("div");
  $todoForm.setAttribute("class","todoForm");
  $todoForm.innerText= todo.title;
  //$todoForm.textContent=todo.title;
  if(todo.completed === true){
    $todoForm.setAttribute("class",$todoForm.getAttribute("class") + " line");
  }

  const $idHidden = document.createElement('p');
  $idHidden.setAttribute("style","visibility: hidden;");
  $idHidden.innerText=todo.id;
  $todoForm.appendChild($idHidden);
  //console.log($todoForm);
  return $todoForm;
}
*/
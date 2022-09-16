import { TodoRender } from "../components/todo-render.js";
import todoService from "../services/todoService.js";

class Index {
  constructor(todoService) {
    this.todos = [];
    this.$todoList = document.querySelector("#todoList");
    this.todoService = todoService;
  }

  async render() {
    this.todos = await this.todoService.fetchTodos();
    for (let todo of this.todos) {
      const todoElement = TodoRender(todo);
      this.$todoList.appendChild(todoElement);
    }

    //addEventListenerToDo(); // doit etre appelé ici, attendre la reponse , sinon aucun effet si appelé après
  }
}

const index = new Index(todoService);
index.render();



/*
function addEventListenerToDo(){
  const todoItems = document.querySelectorAll(".todoForm");

  todoItems.forEach(element => {

    element.addEventListener('click',function(){
      const $id =element.lastChild;
      const id = $id.textContent;
      document.location.href=`pages/todo-details.html?id=${id}`;
    });

    element.addEventListener('mouseenter', function(){
      //element.style.filter = 'blur(5px)';
      element.classList.toggle("todoFormMouseenter")
      //element.getElementsByClassName.filter = 'blur(10px)';
    });

    element.addEventListener('mouseleave', function(){
      //element.style.filter = 'blur(0px)';
      element.classList.toggle("todoFormMouseenter");
    });
    
  });
}
*/

//   # Ajouter page appelé : users-details.html
//   # Ajouter dans l'en-tête du tableau une colonne Actions
//   # Pour chaque user ajouter dans la colonne un lien avec
//      le text `voir` et redirige vers la page `users-details.html`
//      en passant l'id comme paramètre de l'url(ex : ?id=1)
//   # Dans la page 2, faire des recherches sur l'utilisation
//  URLSearchParam pour pouvoir récupérer l'ID afin de l'utiliser
//  Pour faire un appel HTTP et récupérer un user par son id
// Puisser afficher le résultat dans une UI de votre choix

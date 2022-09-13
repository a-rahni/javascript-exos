
//sélectionner le form
// Je stocke et je sélectionne
const form = document.getElementById('form');
//sélectionner l'input
const todo = document.getElementById('todo');
//sélectionner list-items
let listItems = document.querySelector('.list-items');
// base de données
let todoList = [];

// créer une fonction
refresh();

function refresh() {
  listItems.innerHTML = '';

  if (localStorage.getItem('todostorage') !== null) {
    todoList = JSON.parse(localStorage.getItem('todostorage'));
    console.log(todoList, 'tableau de todo');
  }

  todoList.forEach((item) => {
    let itemBlock = `
                        <div class='item'>
                            <p>
                                ${item}
                            </p>
                            <button class='btn-delete'>
                            <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                      `;

    // envoyer itemBlock
    listItems.innerHTML += itemBlock;

    // ajouter un événement au bouton delete
    // stocker tous les boutons, itérer et ajouter un évenement
    const deleteBtn = document.querySelectorAll('.btn-delete');

    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', function () {
        console.log('cliqué', btn);

        content =btn.previousElementSibling.innerText;

        // méthode tab.indexOf(item)
        id = todoList.indexOf(content);
        console.log(id, 'id');

        // supprimer du tableau
        // tab.splice(index, 1)
        todoList.splice(id, 1);
        //console.log(todoList)

        // actualiser le localStorage
        localStorage.setItem('todostorage', JSON.stringify(todoList));
        refresh();
      });
    });
  });
}

// evenement au submit sur form
// console.log
form.addEventListener('submit', function (e) {
  // empêche le rafraichissement de la page
  e.preventDefault();

  //console.log('cliqué');

  // récupérer la valeur de l'input
  // .value
  const todoValue = todo.value.trim();
  //console.log(todoValue)
  // vérification

  // vérification todoValue pas vide + push dans le tableau
  // console.log du tableau
  if (todoValue !== '') {
    // push
    todoList.push(todoValue);
    console.log(todoList);

    // localStorage
    // JSON.stringify(tab)
    localStorage.setItem('todostorage', JSON.stringify(todoList));
  }

  refresh();
});








/*
// sélectionner le form
// séléctionner l'input
// sélectionner list-items

const form = document.getElementById("form");
console.log(form);

const todo = document.getElementById("todo");

let listItems = document.querySelector(".list-items");

let todoList=[];

// créer une focntion refresh
// récupérer le localStorage
// JSON.parse(tab)
// <div class="item"><p>i</p></div>

function refresh(){
    todoList = localStorage.getItem('todostorage');
    for(i=0;i<todoList.length;i++){
   
        
        const item = document.createElement('div');
        const ico = document.createElement('p');
        item.classList.add("item");
        ico.textContent=todoList[i];
        item.appendChild(ico);

        listItems.appendChild(item); 
    }
}


refresh();

function refresh() {
    listItems.innerHTML ='';

    if (localStorage.getItem('todostorage') !== null) {
      todoList = JSON.parse(localStorage.getItem('todostorage'));
      console.log(todoList, 'tableau de todo');
    }
  
    todoList.forEach((item) => {
      let itemBlock = `
                          <div class='item'>
                              <p>
                                  ${item}
                              </p>
                              <button class='btn-delete'>
                              <i class="fas fa-trash-alt"></i>
                              </button>
                          </div>
                        `;
  
      // envoyer itemBlock
      listItems.innerHTML += itemBlock;

      // ajouter un événement au bouton delete
      // stocker tous les boutons, iterer et ajouter un evenement
      const deleteBtn = document.querySelectorAll(".btn-delete");
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
          console.log('cliqué', btn);
  
          // méthode tab.indexOf(item)
          id = todoList.indexOf(item);
          console.log(id, 'id');
  
          // supprimer du tableau
          // tab.splice(index, 1)
          todoList.splice(id, 1);
          //console.log(todoList)
  
          // actualiser le localStorage
          localStorage.setItem('todostorage', JSON.stringify(todoList));
          refresh();
        });
      });

      //deleteListiner();

    });
  }

  

// evenement au submit sur form
form.addEventListener('submit',function(e){
    e.preventDefault(); // empêche le rafraichissement de la page
    console.log('cliqué'); // qu'on click on affiche le log mais ensuite la page est rafraichi 
                            // utiliser e.preventDefault
    

    // récuperer la valeur de l'input  et supprimer les espaces (trim)
    const todoValue = todo.value.trim();

    if(todoValue !==''){
        todoList.push(todoValue);
        console.log(todoList);

        localStorage.setItem('todostorage', JSON.stringify(todoList));
    }

    refresh();


    // empêche le rafraichissement de la page
    // donc ca ressemble a la validation des données (vérification de formulaire)
    // puis faire le POST

});

*/

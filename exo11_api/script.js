// détecter le clic sur le bouton
btn.addEventListener('click', function(){
    console.log('cliqué');
    addText();

});

async function addText(){
    // on récupère l'objet Json (appel API)
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // on transforme en objet JS
    const responseJS = await responseJson.json();
    console.log(responseJS);
    content.innerHTML = responseJS.title;
}

btnList.addEventListener('click', function(){
    console.log('cliqué');
    addList();

});

async function addList(){
    // on récupère l'objet Json (appel API)
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/posts/');

    // on transforme en objet JS
    const responseJS = await responseJson.json();
    console.log(responseJS);

    responseJS.forEach(i => {
        let bloc =`<li>${i.title}</li>`;
        content.innerHTML += bloc;
        
    });

}
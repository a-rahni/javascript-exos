export function createMenuComponent(menu){
    return `<div class="d-flex  menu">
    <p>
        <img class="img_menu"
            src="${menu.img}"
            alt="img not found" />
    </p>
    <div class="infoMenu">
        <div class="d-flex flex-direction-row justify-content-between">
            <p id="titleMenu"> ${menu.title}</p>
            <p id="priceMenu"> ${menu.price} €</p>
        </div>
        <hr />
        <p>${menu.desc}
        </p>

    </div>
</div>`;
}

export function createListMenu(listMenu, containerComponent){
    containerComponent.innerHTML="";
    for (let menu of listMenu) {
      const item = createMenuComponent(menu);
      containerComponent.innerHTML += item;
    }
}
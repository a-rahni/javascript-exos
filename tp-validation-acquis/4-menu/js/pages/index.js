import { createListMenu, createMenuComponent } from "../components/createMenu.js";
import menuService from "../services/menu-service.js";


class MenuManager {
    constructor(menuService) {
      this.listMenu = [];
      this.$listMenu = document.querySelector("#listMenu");;
      this.menuService = menuService;
    }
  
    async render() {
      this.listMenu = await this.menuService.fetchMenu();
      createListMenu(this.listMenu,this.$listMenu)
      
    }


  }

   
  
  const menuManager = new MenuManager(menuService);
  menuManager.render();

  const btnNavs = document.querySelectorAll(".btnNav");
  
  btnNavs.forEach(element => {
    element.addEventListener("click",function(){
      
      let category = element.getAttribute("name");
      if(category ==="all"){
        menuManager.render();
      }else{
        let listMenuByCategorie = menuManager.listMenu.filter(e=>e.category===category);
        createListMenu(listMenuByCategorie,menuManager.$listMenu);
      }

    });
    
  });

  
import { BASE_URL } from "../constants.js";

class MenuService {
  constructor() {
    this.url = `${BASE_URL}/menu`;
  }

  fetchMenu() {
    return fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((menu) => {
        return menu;
      });
  }

  fetchMenuById(id) {
    return fetch(`${this.url}/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((menu) => {
        return menu;
      });
  }
}

export default new MenuService();

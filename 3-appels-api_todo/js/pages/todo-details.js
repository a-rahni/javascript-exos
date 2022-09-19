
import { TodoItem } from "../components/todo-item.js";
import todoService from "../services/todoService.js";
import { getParams } from "../utils/get-param.js";


class TodoDetails {
  constructor(todoService) {
    this.id = getParams("id");
    this.$todoDetails = document.querySelector("#todo-details");
    this.todoService = todoService;
    this.user = null;
  }

  async render() {
    this.todo = await this.todoService.fetchTodoById(this.id);
    const element = TodoItem(this.todo);
    this.$todoDetails.appendChild(element);
    console.log(this.$todoDetails);
  }
}

const todoDetails = new TodoDetails(todoService);
todoDetails.render();

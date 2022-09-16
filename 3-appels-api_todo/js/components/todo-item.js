export function TodoItem(todo) {
  const $todoItem = document.createElement("div");
  $todoItem.setAttribute("class","todoItem");
  $todoItem.innerText= todo.title;

  console.log($todoItem);
  return $todoItem;
}

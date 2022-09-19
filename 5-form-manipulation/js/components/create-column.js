export function CreateColumn(textContent) {
    const column = document.createElement("td");
    column.innerText = textContent;
    return column;
  }

  export function CreateColumnButton(textContent) {
    const column = document.createElement("button");
    column.innerText = textContent;
    return column;
  }

  /*
  export function CreateColumnButton(textContent, classSelctor) {
    const column = document.createElement("button");
    column.classList.add(classSelctor);
    column.innerText = textContent;
    return column;
  }
  */
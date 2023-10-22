let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function createListElement() {
  let listElements = document.getElementsByTagName("li");
  for (let list of listElements) {
    const innertext = list.innerText;
    const todo = innertext.substring(0, innertext.indexOf("\n"));
    if (todo.toLowerCase() === input.value.toLowerCase()) {
      alert("Same todo found", input.value);
      input.value = "";
      return;
    }
  }

  let li = document.createElement("li");
  let liText = document.createTextNode(input.value);
  li.appendChild(liText);
  ul.appendChild(li);
  input.value = "";
  function crossOut() {
    li.classList.toggle("done");
  }
  function strikeOut() {
    let completeTodoUl = document.querySelector(".complete-todo");
    let completeTodoLi = document.createElement("li");
    let completeTododLiText = liText;
    completeTodoLi.appendChild(completeTododLiText);
    completeTodoUl.appendChild(completeTodoLi);
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    completeTodoLi.appendChild(deleteButton);
    completeTodoLi.style.textDecoration = "line-through";
    completeTodoLi.style.backgroundColor = "gray";
    deleteListItem();
    li.removeEventListener("click", crossOut);
    deleteButton.addEventListener("click", ()=>{
        completeTodoLi.classList.toggle("delete");
    });
  }
  li.addEventListener("click", crossOut);
  li.addEventListener("dblclick", strikeOut);

  
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  li.appendChild(deleteButton);
  let editButton = document.createElement("button");
  editButton.innerHTML = `<i class="fas fa-pencil-alt"></i>`;
  li.appendChild(editButton);
  editButton.addEventListener("click",()=>{
    li.contentEditable = true;
  })

  let tickButton = document.createElement("button");
  tickButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  li.appendChild(tickButton);
  tickButton.addEventListener("click",()=>{
    li.contentEditable = false;
  })

  deleteButton.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.toggle("delete");
    // li.remove();
  }
}

enterButton.addEventListener("click", () => {
  if (input.value) {
    createListElement();
  }
});

function addListAfterKeyPress(event) {
  if (input.value && event.key === "Enter") {
    createListElement();
  }
}
input.addEventListener("keypress", addListAfterKeyPress);

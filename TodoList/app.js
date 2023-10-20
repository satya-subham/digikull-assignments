let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");


function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    function crossOut(){
        li.classList.toggle("done");
    }
    function strikeOut(){
        li.style.textDecoration = "line-through";
        li.removeEventListener("click", crossOut);
    }
    li.addEventListener("click", crossOut);
    li.addEventListener("dblclick", strikeOut);

    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.toggle("delete");
        // li.remove();
    }
}

enterButton.addEventListener("click", ()=>{
    if(input.value){
        createListElement();
    }
});

function addListAfterKeyPress(event){
    if(input.value && event.key === "Enter"){
        createListElement();
    }
}
input.addEventListener("keypress", addListAfterKeyPress)
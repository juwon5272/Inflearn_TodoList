const keyCodeCheck = function () {
  if (window.event.keyCode === 13) {
    const todoList = document.querySelector("#todo-list");
    const inputValue = document.querySelector("#todo-input").value;
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = inputValue;
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
  }
};

import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

const todos = [{ text: "je suis une todo", done: false }];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  if (value !== "") {
    addTodo(value);
  } else {
    alert("il faut entrer des mots");
  }
  displayTodo();
});

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  buttonDelete.className = "delete";
  buttonDelete.addEventListener("click", (event) => {
    deleteTodo();
  });
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
    <button class="modify">modifier</button>
    `;
  li.appendChild(buttonDelete);
  return li;
};

const addTodo = (text) => {
  todos.unshift({
    text,
    done: false,
  });
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};
displayTodo();

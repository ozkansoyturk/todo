import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

const todos = [];

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
  console.log(todosNode);
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
    <button class="modify">modifier</button>
    <button class="delete">supprimer</button>
    `;
  console.log(li);
  return li;
};

const addTodo = (text) => {
  todos.unshift({
    text,
    done: false,
  });
};

displayTodo();
